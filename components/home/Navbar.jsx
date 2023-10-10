import React, { useState, useRef, useEffect } from 'react'
import img from '../../public/images/Logo.png'
import { CgMenuMotion } from 'react-icons/cg'
import { NavbarData } from './NavbarData';
import Link from 'next/link';
import Image from 'next/image';


function Navbar() {
  const [selectedCategory, setSelectedcategory] = useState('');
  const [visible, Setvisible] = useState(false)
  const handleMenu = () => {
    {
      !visible ? Setvisible(true) : Setvisible(false)
    }
  }
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        Setvisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const [activeLink, setActiveLink] = useState('/');
  useEffect(() => {
    const currentUrl = window.location.pathname;
    setActiveLink(currentUrl);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image src={img} width="160" height="30" alt="" />
          </Link>

          <button className="interiors-btn me-5" onMouseOver={handleMenu}>
            <CgMenuMotion className='menu-icon me-2' />
            MENU
          </button>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <ul className="navbar-nav me-5 mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link className={activeLink === '/' ? 'nav-link active' : 'nav-link'} href="/">Home</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className={activeLink === '/service' ? 'nav-link active' : 'nav-link'} href="/service">Services</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className={activeLink === '/about-us' ? 'nav-link active' : 'nav-link'} href="/about-us">About us</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className={activeLink === '/gallery' ? 'nav-link active' : 'nav-link'} href="/gallery">Gallery</Link>
              </li>
              <li className="nav-item mx-3 ">
                <Link className={activeLink === '/contact-us' ? 'nav-link active' : 'nav-link'} href="/contact-us" role="button" >
                  Contact
                </Link>
              </li>
              <li className="nav-item mx-3 ">
                <Link className={activeLink === '/renovations' ? 'nav-link active' : 'nav-link'} href="/renovations" role="button" >
                  Renovations
                </Link>
              </li>
              <li className="nav-item mx-3 ">
                <Link className={activeLink === '/blog' ? 'nav-link active' : 'nav-link'} href="/blog" role="button" >
                  Blogs
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div className="interior-category" style={{ display: visible ? 'block' : 'none' }} ref={menuRef}>
        <div className="row">
          <div className="col-4 ">

            <div className="interior-category-header">
              <h4 className='m-0'>Category</h4>
              <hr />
            </div>
            <div className="interior-category-list">

              {
                NavbarData.map((value, index) => {
                  return (
                    <Link href={`/${value.link}`} className={`interior-category-item ${selectedCategory === value.category && 'active'}`} key={index} onMouseOver={() => setSelectedcategory(value.category)}  >
                      {value.category}
                    </Link>
                  )
                })
              }

            </div>

          </div>
          <div className="col-8 ">
            <div className="interior-type-header">
              <h4 className='m-0'>Types</h4>
              <hr />
            </div>

            <div className="interior-type-list">
              {NavbarData.map((value, index) => {
                return value.category === selectedCategory && value.type.map((type, idx) => {
                  return (
                    <Link className="interior-type-item" key={idx} href={`/${type.link}`}>
                      {type.name}
                    </Link>
                  );
                });
              })}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
