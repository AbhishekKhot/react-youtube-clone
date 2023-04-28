import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import './style.css'
import { BiSearch } from 'react-icons/bi'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div><RxHamburgerMenu className='menu-icon' /></div>
            <div className='search-container'>
                <input type='text' className='input-search' placeholder='Search' />
                <BiSearch className='search-icon' />
            </div>
        </div>
    )
}
