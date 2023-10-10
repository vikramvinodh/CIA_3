import React, { useContext } from 'react'
import * as bi from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

function Profileavatar() {
    let navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();
        localStorage.clear();
        navigate('/');
    }

    const context = useContext(UserContext)
    return (
        <>
            <div className="btn-group dropend dropend-sm mx-3">
                <div className='mt-2 mx-2 text'>
                    {context.isAdmin.username}
                </div>
                <button type="button" className="btn dropbtn" data-bs-toggle="dropdown"><bi.BiPencil /></button>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to="../change-password">Change Password</Link>
                    <button className="dropdown-item" onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        </>
    )
}

export default Profileavatar
