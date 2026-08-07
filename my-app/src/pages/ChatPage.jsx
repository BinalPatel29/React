import styles from './ChatPage.module.css'
import { Link } from 'react-router-dom'

export default function ChatPage() {
    return (
        <div className= { styles.chatContainer }>

            <aside className= { styles.sidebar }>

                <div className= { styles.roomsSection }>
                    <h2>Chat Rooms</h2>
                    <ul className= { styles.roomList }>
                        <li className= { styles.active }>General</li>
                        <li>Developer</li>
                        <li>Random</li>
                    </ul>
                </div>

                <div className= { styles.usersSection }>
                    <h2>Active Users</h2>
                    <ul className= { styles.userList}>
                        <li>User-1</li>
                        <li>User-2</li>
                    </ul>
                </div>
                
            </aside>

            <main className= { styles.chatMain }>

                <header>

                    <h2>General Chat</h2>
                    <div className= { styles.sidebarFooter }>
                        <button className='btnLogout'>LOG OUT</button>
                    </div>
                    
                </header>

                <section className= { styles.chatBody }>

                    <section className= { styles.messageArea }>
                        <div className={` ${ styles.message } ${ styles.messageRecieved } `}>
                            <div className= { styles.messageGridWrapper }>
                                <div className= { styles.msgAvatar }>A</div>
                                <div className= { styles.msgSender }>User-1</div>
                                <div className= { styles.msgText }>Hey!</div>
                                <div className= { styles.msgTime }>02:45 PM</div>
                            </div>
                        </div>

                        <div className={` ${ styles.message } ${ styles.messageSent} `}>
                            <div className= { styles.messageGridWrapper }>
                                <div className= { styles.msgAvatar }>B</div>
                                <div className= { styles.msgSender }>User-2</div>
                                <div className= { styles.msgText }>Hi!</div>
                                <div className= { styles.msgTime }>02:45 PM</div>
                            </div>
                        </div>
                    </section>

                    <div className= { styles.typingIndicator } style={{ display: 'none' }}>
                        <span>User is typing...</span>
                    </div>
                </section>

                <footer>
                    <form className='chatInputBar'>
                        <input type="text" id="msgInput" placeholder="Type message..." required autoComplete="off" />
                        <button type="submit" id="sendBtn">Send</button>
                    </form>
                </footer>

            </main>
        </div>
    )
}