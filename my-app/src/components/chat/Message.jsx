import Avatar from './Avatar';
import styles from '../../pages/ChatPage.module.css';

function Message({ message, isSentByMe, }) {
    const messageClass = isSentByMe? styles.sent : styles.recieved;

    const formTime = (timestamp) => {
        return new Date(timestamp).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    };

    return (
        <div className= {` ${styles.message} ${styles.messageClass}`}>
            <div className= {styles.messageGridWrapper}>
                <span className= { styles.msgSender }> {message.sender}</span>
                <Avatar name= {message.sender} />
                <div className= { styles.msgText }> {message.text}</div>
                <span className= { styles.msgTime}> {formatTime(message.timestamp)}</span>
            </div>
        </div>
    );
}

export default Message;