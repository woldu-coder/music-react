import React, { useRef } from 'react';
import "./Register.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../../utils/AuthContext';

const Signup = () => {
    const signupForm = useRef(null);
    const {registerUser} = useAuth()

    const handleSubmit = (e)=>{
        e.preventDefault()
        const first_name = signupForm.current.first_name.value;
        const last_name = signupForm.current.last_name.value;
        const username = signupForm.current.username.value;
        const email = signupForm.current.email.value;
        const phone_number = signupForm.current.phone_number.value;
        const password = signupForm.current.password.value;
        const password1 = signupForm.current.password1.value;
        if (password !== password1){
            alert("Password doesn't match")
            return 
        }
        const userInfo = {first_name, last_name, username, phone_number, email, password}

        registerUser(userInfo)
    }
  return (
    <div className='register__page'>
        <div className='register__page_form'>
            <div className='register__page_form-container'>
            <div className='form__header'>
                    <h2>SignUp <span>here</span></h2>
                </div>  
                <form method='post' ref={signupForm} onSubmit={handleSubmit}>
                    <div className='input__field'>
                        <input type="text" name='first_name' placeholder='Enter your First Name' />
                    </div>
                    <div className='input__field'>
                        <input type="text" name='last_name' placeholder='Enter your Last Name' />
                    </div>
                    <div className='input__field'>
                        <input type="text" name='username' placeholder='Enter a username' />
                    </div>
                    <div className='input__field'>
                        <input type="email" name='email' placeholder='Enter your email' />
                    </div>
                    <div className='input__field'>
                        <input type="phone" name='phone_number' placeholder='Enter your phone number' />
                    </div>
                    <div className='input__field'>
                        <input type="password" name='password' placeholder='Enter a password' />
                    </div>
                    <div className='input__field'>
                        <input type="password" name='password1' placeholder='Confirm a password' />
                    </div>
                    <div className='input__field'>
                        <input type="submit" value="Signup"/>
                        <p>Have an account? login <Link to="/login">here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup