import styles from './LoginPage.module.css'
import { useNavigate, Link } from 'react-router-dom'

export default function LoginPage() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/chat')
    }

    return (
        <div className= { styles.pagewrapper }>

            <div className= { styles.notesCard }>

                <div className= { styles.login } >
                    <h1>Login Here!</h1>

                    <div id="errorMessage" className= { styles.errorMessage }></div>
                    <div id="successMessage" className= { styles.successMessage } ></div>

                    <form id='loginForm'>
                        <div className= { styles.formGroup }>
                            <label htmlFor='email'>Email:</label> 
                            <input type='email' id='email' placeholder='Enter your email' required />
                        </div>

                        <div className= { styles.formGroup }>
                            <label htmlFor='password'>Password:</label>
                            <input type='password' id='password' placeholder='Enter your password' required />
                        </div>

                        <input type='submit' className= { styles.addBtn } value='LOG IN' />
                    </form>

                    <p>Don't have an account? <Link to = "/register" className= {styles.registerLink}>Signup here</Link></p> 
                </div>
            </div>

        </div>
    )
}