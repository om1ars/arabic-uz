import React from 'react'
import { useSelector } from 'react-redux'

export default function Test() {
    const test = useSelector(state => state.test.list)

    console.log(list);
    return (
        <div>
            
        </div>
    )
}
