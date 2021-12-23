import React, { useState } from 'react'
import firebase from 'firebase'


import { Input, Button } from '@material-ui/core'
import { auth, db } from '../utils/firebase'
interface Props  {
    scroll: any
}



export const  SendMessage: React.FC <Props> = ({scroll}) =>  {
    const [msg, setMsg] = useState('')

    async function sendMessage(e: any) {
        e.preventDefault()
        const  { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
              <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit">Send</Button>
                </div>
            </form>
        </div>
        </div>
    )
}
