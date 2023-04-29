import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar'
import './style.css'
import Sidebar from '../sidebar'

export default function AppLayout() {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='app-layout-container'>
            <div className='navbar-row'><Navbar setToggleMenu={setToggleMenu} /></div>
            <div className='sidebar-child-container'>
                {toggleMenu && <Sidebar />}
                <Outlet />
            </div>
        </div>
    )
}
