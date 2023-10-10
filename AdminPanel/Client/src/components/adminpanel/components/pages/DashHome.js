import axios from 'axios'
import React, { useEffect } from 'react'
import ProfileAvatar from '../Navbar/Profileavatar'

const Home = () => {

    return (
        <>
            <div className='container-fluid my-5 py-5'>
                <nav className="navbar justify-content-center nav-custom navbar-light navbar-expand-lg bg-light border">
                    <ProfileAvatar />
                </nav>
            </div>
        </>
    )
}

export default Home
