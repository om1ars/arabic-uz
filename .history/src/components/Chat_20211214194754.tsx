import React, { useState } from 'react'

export default function Chat() {
        const [messages, setMessages] = useState([])

        useEffect(() => {
            db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot:anyx => {
                setMessages(snapshot.docs.map(doc: any => doc.data()))
            })
        }, [])

    return (
        <div>
        <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>        </div>
    )
}
