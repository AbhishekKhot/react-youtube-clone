import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function SearchResult() {
    const data = useLoaderData()
    console.log(data)
    const { query } = useParams()
    console.log(query.split(':')[1])

    return (
        <div>
            Search results
        </div>
    )
}
