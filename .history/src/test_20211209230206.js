import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Test() {
    const test = useSelector(state => state.test.list)

    console.log([...test]);
    // const dispatch = useDispatch()

    
    return (
    <div>
            <h1>Hello</h1>
        </div>
    )
}
