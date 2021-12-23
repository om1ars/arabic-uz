import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Test() {
    const test = useSelector(state => state.test.list)

 
    const arrayed_test = [test]
    console.log(test);

    
    return (
    <div>
            <h1>Hello</h1>
        </div>
    )
}
