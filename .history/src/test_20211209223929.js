import React from 'react'
import { useSelector } from 'react-redux'

export default function test() {
    const test = useSelector(state => state.test.list)
    return (
        <div>
            
        </div>
    )
}
