import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import './style.css'
import { BiSearch } from 'react-icons/bi'
import { BsYoutube } from 'react-icons/bs'
import { MdAccountCircle, MdNotificationsNone } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function Navbar({ setToggleMenu }) {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    function handleSearchQuery() {
        navigate(`query:${query}`)
    }

    return (
        <div className='navbar'>
            <div className="left-icon-container">
                <div>
                    <RxHamburgerMenu className='menu-icon' onClick={() => setToggleMenu((prev) => !prev)} />
                </div>
                <div>
                    <BsYoutube className='youtube-icon' />
                </div>
                <div className='youtube-text'>YouTube</div>
            </div>


            <div className='search-container'>
                <input type='text' className='input-search' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search' />
                <BiSearch className='search-icon' onClick={handleSearchQuery} />
            </div>

            <div className='right-icons-container'>
                <MdNotificationsNone className='notification-icon' />
                <MdAccountCircle className='account-icon' />
            </div>

        </div>
    )
}
