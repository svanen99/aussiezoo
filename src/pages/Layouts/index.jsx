import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';

const Layout = () => {
  return (
    <div>
        <Navbar />
        <main><Outlet /></main>
      </div>
  );
};

export default Layout;