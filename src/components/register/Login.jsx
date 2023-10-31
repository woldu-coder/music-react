import React, { useEffect, useRef } from 'react';
import "./Register.css";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/AuthContext';

const Login = () => {
    const navigate = useNavigate()
    const {user, loginUser} = useAuth()
    console.log("current user: ", user)
    const loginForm = useRef(null)


    useEffect(()=>{
        if(user){
            navigate("/")
        }
    }, [])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const email = loginForm.current.email.value;
        const password = loginForm.current.password.value;

        const userInfo = {email, password}

        loginUser(userInfo)
    }
  return (
    <div className='register__page'>
        <div className='register__page_form'>
            <div className='register__page_form-container'>
                <div className='form__header'>
                    <h2>Login <span>here</span></h2>
                </div>              
                <form method='post' ref={loginForm} onSubmit={handleSubmit}>
                    <div className='input__field'>
                        <input type="email" name='email' placeholder='Enter your email address' />
                    </div>
                    <div className='input__field'>
                        <input type="password" name='password' placeholder='Enter a password' />
                    </div>
                    <div className='input__field'>
                        <input type="submit" value="Login"/>
                        <p>Haven't account yet? signup <Link to="/signup">here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login