import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Test() {
    const test = useSelector(state => state.test.list)




    test.forEach(m => {
        for(let key in m) {
            console.log(m[key].surah_name_lang);


            return key
        }
    })

    
    return (
    <div>
            <h1>Hello</h1>
        </div>
    )
}
