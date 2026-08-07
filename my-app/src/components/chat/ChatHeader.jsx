import styles from '../../pages/ChatPage.module.css';

function ChatHeader({ roomName, onLogout }) {
  return (
    <header className={styles.ChatHeader}>
      <h1>{roomName}</h1>
      <button className={styles.btnLogout} onClick={onLogout}>
        LOG OUT
      </button>
    </header>
  );
}

export default ChatHeader;
