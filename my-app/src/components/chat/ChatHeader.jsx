import styles from '../../pages/ChatPage.module.css';

function ChatHeader({ roomName, onLogout }){
    return (
        <header className= { styles.ChatHeader }>
            <h1>{roomName}</h1>
            <button onClick={ onLogout } className= { styles.addLogout }>
                LOG OUT
            </button>
        </header>
    );
}

export default ChatHeader;