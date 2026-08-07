import styles from '../../pages/ChatPage.module.css';

function ChatInput(onSendMessage){
    const handleSubmit = (e) => {
        e.prevenDefault();
        if(inputValue.trim() === '') return;
        onSendMessage(inputValue);
        setInputValue('');
    }

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