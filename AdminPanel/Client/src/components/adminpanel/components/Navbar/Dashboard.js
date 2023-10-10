import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext';
import SideNav from './SideNav'

const Dashboard = () => {

  const navigate = useNavigate();
  const context = useContext(UserContext);
  const token = sessionStorage.getItem('token') || localStorage.getItem('token');

  useEffect(() => {
    console.log(token);
    if (!token) {
      navigate('/');
      return;
    }
    if (context) {
      context.IsAdmin(token);
    }

    const cleanup = () => {
      // cleanup function
      console.log('Dashboard cleanup function called');
    }

    return cleanup;
  }, [token]);

  return (
    <>
    
      <SideNav />
    </>
  );
}

export default Dashboard;
