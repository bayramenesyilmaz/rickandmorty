import './style/global.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const Layout: React.FC = () => {

    return <div className='layout-container'>

        <Navbar />

        <section>

            <Outlet />

        </section>

    </div>
};

export default Layout;