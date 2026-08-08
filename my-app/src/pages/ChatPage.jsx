import styles from './ChatPage.module.css';
import { useNavigate } from 'react-router-dom';

import MessageList from '../components/chat/MessageList';
import ChatHeader from '../components/chat/ChatHeader';
import ChatInput from '../components/chat/ChatInput';

const DUMMY_MESSAGES = [
    { id: 'msg-1', sender: 'Priya', text: 'Phase-2 is completed', timestamp: new Date(Date.now() - 1000 * 60 * 10) },
    { id: 'msg-2', sender: 'Riya', text: 'Phase-3 is completed', timestamp: new Date(Date.now() - 1000 * 60 * 9) },
    { id: 'msg-3', sender: 'Kiya', text: 'Phase-4 is completed', timestamp: new Date(Date.now() - 1000 * 60 * 7) },
    { id: 'msg-4', sender: 'Jiya', text: 'Phase-5 is completed', timestamp: new Date(Date.now() - 1000 * 60 * 5) },
    { id: 'msg-5', sender: 'Diya', text: 'Phase-6 is completed', timestamp: new Date(Date.now() - 1000 * 60 * 3) },
    { id: 'msg-6', sender: 'Hiya', text: 'Phase-7 is completed', timestamp: new Date(Date.now() - 1000 * 60 * 1) },
];

export default function ChatPage() {
    const navigate = useNavigate();
    const currentUser = 'Priya'; 
    const activeRoom = 'General';

    const handleSendMessage = (text) => {
        console.log("Sending:", text); 
    };

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className={styles.chatContainer}>

            <aside className={styles.sidebar}>
                <div className={styles.roomsSection}>
                    <h2>Chat Rooms</h2>
                    <ul className={styles.roomList}>
                        <li className={styles.active}>General</li>
                        <li>Developer</li>
                        <li>Random</li>
                    </ul>
                </div>

                <div className={styles.usersSection}>
                    <h2>Active Users</h2>
                    <ul className={styles.userList}>
                        <li>Priya</li>
                        <li>Riya</li>
                        <li>Kiya</li>
                        <li>Jiya</li>
                        <li>Diya</li>
                        <li>Hiya</li>
                    </ul>
                </div>
            </aside>

            <main className={styles.chatMain}>
                <ChatHeader roomName={activeRoom} onLogout={handleLogout} />

                <section className={styles.chatBody}>
                    <MessageList messages={DUMMY_MESSAGES} currentUser={currentUser} />

                    <div className={styles.typingIndicator} style={{ display: 'none' }}>
                        <span>User is typing...</span>
                    </div>
                </section>

                <ChatInput onSendMessage={handleSendMessage} />

            </main>
        </div>
    )
}