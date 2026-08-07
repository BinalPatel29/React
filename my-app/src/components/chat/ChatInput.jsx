import { useState } from 'react';
import styles from '../../pages/ChatPage.module.css';

function ChatInput({ onSendMessage }){
    const [inputValue, setInputValue] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim() === '') return;
        onSendMessage(inputValue);
        setInputValue('');
    }

    return (
        <footer className={styles.chatInput}> 
            <form className={styles.chatInputBar} onSubmit={handleSubmit}>
                <input
                   type='text'
                   id='msgInput'
                   placeholder='Type Message...'
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)} 
                   autoComplete='off'
                />
                <button type='submit' className={styles.sendBtn}>Send</button>
            </form>
        </footer>
    );
}

export default ChatInput;