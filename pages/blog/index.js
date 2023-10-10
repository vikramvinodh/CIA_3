import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/home/Navbar';
import { dateConvertor } from '../../components/function';
import BlogCatContainer from '../../Blogs/BlogCatContainer';
import RecentPost from '../../Blogs/RecentPost';
import Pagination from '../../components/Pagination';

export async function getServerSideProps() {
    try {
        const res = await fetch(`http://localhost:5001/blog/get-all`);
        const res2 = await fetch(`http://localhost:5001/blog-category`);
        const res3 = await fetch('http://localhost:5001/blog/recent-posts');

        const data = await res.json();
        const category = await res2.json();
        const recent = await res3.json();

        if (!data || !data.data) {
            // Blog post not found, return the notFound property to show the default Next.js 404 page
            return {
                notFound: true,
            };
        }

        return {
            props: {
                data: data.data,
                category: category.data,
                recent: recent.data
            },
        };

    } catch (err) {
        console.error(err);
        return {
            props: {
                data: null,
            },
        };
    }
}


function Blogs({ data, category, recent }) {

    const [state, setState] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);
    const [catName, setCatname] = useState('');

    // Calculate the index of the last post to render
    const indexOfLastPost = currentPage * postsPerPage;
    // Calculate the index of the first post to render
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // Slice the data array to only include the posts to render on the current page
    const currentPosts = state.slice(indexOfFirstPost, indexOfLastPost);

    // Calculate the range of pages to display based on the current page and the total number of pages
    const totalPages = Math.ceil(data.length / postsPerPage);

    // Handle page changes
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className=" row my-5 justify-content-around">
                    <div className="col-lg-8 col-md-8 col-sm-12 blog-column-1 px-5">
                        <div className="nav-title mt-3">
                            <h1 className='blog-nav'>{catName ? catName : "Blogs"}</h1>
                        </div>
                        {currentPosts.map((ele) => (
                            <div className="content" key={ele._id}>
                                <div className="d-flex flex-column">
                                    <h2 className="entry-title text-capitalize">
                                        <Link href={`/blog/${ele.slug}`}>
                                            {ele.title}
                                        </Link>
                                    </h2>
                                    <ul className="nv-meta-list">
                                        <li className="meta date posted-on">
                                            {dateConvertor(ele.updatedAt)}
                                        </li>
                                    </ul>
                                    <div className="summury-text">
                                        <p>
                                            {ele.smalldesc.slice(0, 250)}.....
                                            <Link href={`/blog/${ele.slug}`} rel="bookmark">
                                                Read More »
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Render the pagination component */}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            handlePageChange={handlePageChange}
                        />
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-12 blog-column-1">
                        <div className="sticky-top">

                            {/* <BlogCatContainer data={category} setState={setState} setCatname={setCatname} /> */}
                            <RecentPost data={recent} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Blogs
