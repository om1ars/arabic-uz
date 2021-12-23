import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Test() {
    const test = useSelector(state => state.test.list)
    const arrayed_test = [test, 'hey']


    arrayed_test[0].map((t) => console.log(t.map(d), 'hey'))
 
    // console.log(arrayed_test);
// 
    
    return (
    <div>
            <h1>Hello</h1>
        </div>
    )
}
