import React from 'react'

export default function Chat() {
    const [messages, setMessages] = useState([])

    return (
        <div>
        <div className="msgs">
                {messages.map(({ id: any, text: any, photoURL: any, uid: any }) => (
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
