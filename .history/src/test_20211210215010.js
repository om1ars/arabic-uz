import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Test() {
    const test = useSelector(state => state.test.list)
    const arrayed_test = [test, 'hey']


    arrayed_test.map((t) => console.log(t, 'hey'))
 
    // console.log(arrayed_test);
// 
    
    return (
    <div>
            <h1>Hello</h1>
        </div>
    )
}
