import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Test() {
    const test = useSelector(state => state.test.list)

    // console.log([...test, test.map((e) => e.lang)]);
    test.map(e => console.log(e))
    // const dispatch = useDispatch()

    
    return (
    <div>
            <h1>Hello</h1>
        </div>
    )
}
