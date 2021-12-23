import React from 'react'
import Chat from '../components/Chat'
import Signin from '../components/SignIn'
// import Signin from '../components/Signin'
export default function AboutUs() {

    const [ user] =     

    return (
        <div>

            {user ? <SignIn /> : <Chat />}
            
        </div>
    )
}
