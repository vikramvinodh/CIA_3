import React from 'react';
import Navbar from '../../components/home/Navbar';
import HTMLReactParser from 'html-react-parser';
import RecentPost from '../../Blogs/RecentPost';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { dateConvertor } from '../../components/function';

export async function getServerSideProps({ params }) {

  try {
    const { post } = params;
    const res3 = await fetch('http://localhost:5001/blog/recent-posts');
    const res = await fetch(`http://localhost:5001/blog/${post}`);
    const recent = await res3.json();
    const { data } = await res.json();

    return {
      props: {
        data,
        recent: recent.data
      },
    };

  } catch (error) {
    console.error(error);
    return {
      props: {
        data: null,
      },
    };
  }
}

export default function Post({ data, recent }) {
  const { title, body, meta_title, meta_description, meta_robots, updatedAt, author } = data || {};

  const router = useRouter();
  const segments = router.asPath.split('/').filter((segment) => segment !== '');
  const breadcrumbs = [{ name: 'Home', url: '/blog' }];

  let currentPath = '';
  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({ name: segment, url: currentPath });
  });

  return (
    <>

      <Head>
        <title>{meta_title}</title>
        <meta name="title" content={meta_title} />
        <meta name="description" content={meta_description} />
        <meta name="robots" content={meta_robots} />
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>

      <Navbar />
      <div className="container mb-5">
        <div className='m-4 mx-0 nav-blogs-crumbs text-capitalize'>
          <nav aria-label="breadcrumb ">
            <ol className="breadcrumb">
              {breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.url} className={`breadcrumb-item ${breadcrumb.url === router.asPath ? 'active' : ''}`}>
                  {breadcrumb.url === router.asPath ? (
                    breadcrumb.name
                  ) : (
                    <Link href={breadcrumb.url}>{breadcrumb.name}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
        <div className="row justify-content-around blog-container" >
          <div className="col-lg-8 col-md-4 col-sm-12">
            <h1>{title}</h1>
            <ul className="nv-meta-list">
              <li className="meta date posted-on text-capitalize">
                {dateConvertor(updatedAt)} <br />
                <br />
                <h6>
                  author : {author.name}
                </h6>
              </li>
            </ul>
            <hr />
            <div>{HTMLReactParser(body)}</div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 ">
            <div className='sticky-top'>
              <RecentPost data={recent} />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
