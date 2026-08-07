import styles from '../../pages/ChatPage.module.css';

function ChatInput(onSendMessage){
    return (
        <footer className= { styles.ChatInput }>
            <form className= { styles.chatInputBar}>
                <input
                   type= 'text'
                   id= 'msgInput'
                   placeholder= 'Type Message...'
                   value= {inputValue}
                />
                <button type= 'submit' id='sendBtn'>Send</button>
            </form>
        </footer>
    );
}

export default ChatInput;