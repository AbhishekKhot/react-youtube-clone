import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { BsCameraReels } from 'react-icons/bs'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { AiOutlineHistory, AiOutlineFire, AiOutlineShopping } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { CiMusicNote1 } from 'react-icons/ci'
import { BiMoviePlay, BiNews, BiTrophy, BiHelpCircle } from 'react-icons/bi'
import { TbLivePhoto } from 'react-icons/tb'
import { SiYoutubegaming } from 'react-icons/si'
import { MdOutlineFeedback, MdOutlineWatchLater, MdOutlineQueueMusic, MdArrowDropDown } from 'react-icons/md'

export default function Sidebar() {
    const [showMore, setShowMore] = useState(false)

    return (
        <div className='sidebar'>
            <Link to='/' className='item'>
                <AiOutlineHome className='icon' />
                <span>Home</span>
            </Link>
            <Link to='/shorts' className='item'>
                <BsCameraReels className='icon' />
                <span>Shorts</span>
            </Link>
            <Link to='/subscriptions' className='item'>
                <MdOutlineSubscriptions className='icon' />
                <span>Subscriptions</span>
            </Link>
            <hr />

            <Link to='/history' className='item'>
                <AiOutlineHistory className='icon' />
                <span>History</span>
            </Link>
            <Link to='/watchlater' className='item'>
                <MdOutlineWatchLater className='icon' />
                <span>Watch later</span>
            </Link>
            <Link to='/settings' className='item'>
                <FiSettings className='icon' />
                <span>Settings</span>
            </Link>
            <hr />
            <span className='sidebar-menu-item'>Explore</span>

            <Link to='/trending' className='item'>
                <AiOutlineFire className='icon' />
                <span>Trending</span>
            </Link>
            <Link to='/shopping' className='item'>
                <AiOutlineShopping className='icon' />
                <span>Shopping</span>
            </Link>
            <Link to='/music' className='item'>
                <CiMusicNote1 className='icon' />
                <span>Music</span>
            </Link>

            <span className='item' onClick={() => setShowMore((prev) => !prev)}>
                <MdArrowDropDown className='icon' />
                <span>{showMore ? "Show less" : "Show more"}</span>
            </span>

            {showMore &&
                <>
                    <Link to='/music' className='item'>
                        <MdOutlineQueueMusic className='icon' />
                        <span>Hindi Songs</span>
                    </Link>
                    <Link to='/music' className='item'>
                        <MdOutlineQueueMusic className='icon' />
                        <span>Panjabi Songs</span>
                    </Link>
                    <Link to='/music' className='item'>
                        <MdOutlineQueueMusic className='icon' />
                        <span>Tamil Songs</span>
                    </Link>
                </>
            }
            <hr />






            <Link to='/movies' className='item'>
                <BiMoviePlay className='icon' />
                <span>Movies</span>
            </Link>
            <Link to='/live' className='item'>
                <TbLivePhoto className='icon' />
                <span>Live</span>
            </Link>
            <Link to='/gamming' className='item'>
                <SiYoutubegaming className='icon' />
                <span>Gamming</span>
            </Link>
            <Link to='/news' className='item'>
                <BiNews className='icon' />
                <span>News</span>
            </Link>
            <Link to='/sports' className='item'>
                <BiTrophy className='icon' />
                <span>Sports</span>
            </Link>
            <hr />
            <Link to='/feedback' className='item'>
                <MdOutlineFeedback className='icon' />
                <span>Feedback</span>
            </Link>
            <Link to='/help' className='item'>
                <BiHelpCircle className='icon' />
                <span>Help</span>
            </Link>
        </div>
    )
}
