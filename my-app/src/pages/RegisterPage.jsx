import styles from './RegisterPage.module.css'
import { useNavigate,Link } from 'react-router-dom'

export default function RegisterPage() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/login')
    }

    return (
        <div className= { styles.pagewrapper }>

            <div className= { styles.notesCard }>
            
                <h1>Register Here!</h1>

                <div id="errorMessage" className= { styles.errorMessage }></div>
                <div id="successMessage" className= { styles.successMessage } ></div>

                <form id='loginForm'>

                    < div className= { styles.nameRow }>

                        <div className= {styles.formGroup }>
                            <label htmlFor='fname'>FirstName:</label>
                            <input type="text" id="fname" placeholder="Enter your first name" required />
                        </div>

                        <div className= {styles.formGroup }>
                            <label htmlFor='lname'>LastName:</label>
                            <input type="text" id="lname" placeholder="Enter your last name" required />
                        </div>

                        <div className= { styles.formGroup }>
                            <label htmlFor='email'>Email:</label> 
                            <input type='email' id='email' placeholder='Enter your email' required />
                        </div>

                        <div className= { styles.formGroup }>
                            <label htmlFor='password'>Password:</label>
                            <input type='password' id='password' placeholder='Enter your password' required />
                        </div>

                        <div className= {styles.formGroup }>
                            <label htmlFor='mobno'>Mobile No:</label>
                            <input type="tel" id="mobno" maxlength="10" pattern="[0-9]{10}" placeholder="Enter your phone number" />
                        </div>                    
                    </div>

                    <input type='submit' className= { styles.addBtn } value='REGISTER' />

                </form>

                <p>Already have an account? <Link to ="/login" className= {styles.loginLink}>Login here</Link></p>
            </div>

        </div>
    )
}