import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../../firebase.init';
import { Link } from 'react-router';

const Login = () => {
    const [success , setSuccess] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    const emailRef = useRef();

    const handleLogin = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // reset error message
        setSuccess(false)
            setErrorMessage(' ')
        // log in user

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            if(!result.user.emailVerified){
                alert('please verify your email address')
            }
            else{
                setSuccess(true);
            }
            

        })
        .catch(error => {
            console.log(error);
            setErrorMessage(error.message)
        })

    }

    const handleForgetPassword = () =>{
        console.log(emailRef.current.value);
        const email = emailRef.current.value;

        setErrorMessage('');

        // send password reset email

        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert('A password reset email is sent. Please check your email.')
        })
        .catch(error =>{
            setErrorMessage(error.message);
        })

    }
    return (


        <div className="card bg-gray-400 w-full mx-auto mt-20 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold text-center">Login now!</h1>
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" ref={emailRef} name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>

                <p>New To this Website? Please <Link className='text-blue-500 underline' to='/signup'>Signup</Link></p>
                {
                    errorMessage && <p className='text-red-500'>{errorMessage}</p>
                }
                {
                    success && <p className='text-green-500'>User logged in successfully</p>
                }
            </div>
        </div>

    );
};

export default Login;