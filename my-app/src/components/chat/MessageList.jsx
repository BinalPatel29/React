import Message from './Message';
import styles from '../../pages/ChatPage.module.css';

function MessageList({ messages, currentUser }){
    retrun (
        <div className= { styles.messageArea }>
            {messages.map((msg) => (
                <Message
                   key={msg.id}
                   message={msg}
                   isSentByMe={message.sender === currentUser}
                   />
            ))}
        </div>
    );
}

export default MessageList;