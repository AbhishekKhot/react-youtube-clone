import React from 'react'
import { useParams } from 'react-router-dom'

export default function SearchResult() {
    const { query } = useParams()
    console.log(query)
    
    return (
        <div>
            Search results
        </div>
    )
}
