import styles from "../../pages/ChatPage.module.css";

function Avatar({ name }) {
    return (
        <div className= { styles.msgAvatar }>
            {name? name[0].toUpperCase(): '?'}
        </div>
    )
}

export default Avatar;