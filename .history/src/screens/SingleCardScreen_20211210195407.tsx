import React from 'react'
import { useParams } from 'react-router'

export const   SingleCard =  () => {
    const {slug} = useParams()
    return (
        <div>
            <h1>This is Single</h1>
        </div>
    )
}
