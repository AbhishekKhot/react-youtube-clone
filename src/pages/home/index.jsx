import React, { useState } from 'react'
import './style.css'
import { json, useLoaderData } from 'react-router-dom'
export default function Home() {
    const queries = [
        "All", "Trending", "Music", "Education", "HTML", "React tutorials", "Thrilles", "Comedy", "Car reviews", "Wild-life", "Watched",
        "Recently uploaded", "Cars", "New to you", "Drama", "News", "Action", "Live", "Film Reviews", "Body-building", "Documentries",
    ]

    const [queryStyle, setQueryStyle] = useState([])

    const data = useLoaderData()

    console.log(data)


    function changeQueryItemStyle(position) {
        queryStyle.map((value, index) => {
            queryStyle[index] = false
        })
        queryStyle[position] = !queryStyle[position]
        setQueryStyle([...queryStyle])
    }

    return (
        <div className='home-container'>
            <div className='query-container'>
                {queries.map((query, index) =>
                (
                    <span key={index} className={!queryStyle[index] ? "query-item" : "query-item-clicked"} onClick={() => changeQueryItemStyle(index)}>{query}</span>
                )
                )}
            </div>
            <div className="home-video-container">
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>

                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>

                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>

                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>

                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>

                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>

                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>

                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
                <div className='video-conainter'>Video</div>
            </div>

        </div >
    )
}