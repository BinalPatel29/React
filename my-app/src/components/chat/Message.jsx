import Avatar from './Avatar';
import styles from '../../pages/ChatPage.module.css';

function Message({ message, isSentByMe, }) {
    const messageClass = isSentByMe? styles.messageSent : styles.messageRecieved;

    const formtTime = (timestamp) => {
        return new Date(timestamp).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    };

    return (
        <div className= {` ${styles.message} ${messageClass}`}>
            <div className= {styles.messageGridWrapper}>
                <span className= { styles.msgSender }> {message.sender}</span>
                <Avatar name= {message.sender} />
                <div className= { styles.msgText }> {message.text}</div>
                <span className= { styles.msgTime}> {formtTime(message.timestamp)}</span>
            </div>
        </div>
    );
}

export default Message;