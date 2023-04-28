import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar'
import './style.css'
import Sidebar from '../sidebar'

export default function AppLayout() {
    return (
        <div className='app-layout-container'>
            <div className='navbar-row'><Navbar /></div>
            <div className='sidebar-child-container'>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}
