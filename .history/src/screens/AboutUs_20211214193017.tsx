import React from 'react'
import Chat from '../components/Chat'
import Signin from '../components/SignIn'
import {auth } from '../'
import { useAuthState } from 'react-firebase-hooks/auth'
export default function AboutUs() {

    const [ user] =     useAuthState(auth)

    return (
        <div>

            {user ? <SignIn /> : <Chat />}
            
        </div>
    )
}
