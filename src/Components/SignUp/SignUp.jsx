import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const SignUp = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(email, password, terms);

        setSuccess(false);
        setErrorMessage('');

        if(!terms){
            setErrorMessage('Please Accept Our Trems and Condition')
            return
        }

        // password validate

        const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if (passwordRegExp.test(password) === false) {
            setErrorMessage('password must have one  lowerCase,one uppercase, one digit and 6 characters or longer.exmp: User12')
            return;
        }

        // create user email with pass
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                
                // email verify
                sendEmailVerification(auth.currentUser)
                .then(()=>{
                    setSuccess(true)
                    alert('we sent an email please check your inbox')
                })
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)
                
            })
    }

    return (


        <div className="card bg-base-100 rounded-xl bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30 border border-white/20 backdrop-blur-md   mx-auto mt-20 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                <form onSubmit={handleSignUp}>
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label mt-4">Password</label>
                    <div className='relative'>
                        <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password" />
                        <button onClick={() => { setShowPassword(!showPassword) }} className='btn btn-xs absolute top-2 right-6'>

                            {
                                showPassword ? <FaEyeSlash /> : <FaEye />
                            }

                        </button>


                    </div>

                    <div><a className="link link-hover">Forgot password?</a></div>

                    <label className="label mt-2">

                        <input type="checkbox" name='terms'  className="checkbox" />
                        Accept Terms And Conditions
                    </label>
                    <br />

                    <button className="btn mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-none hover:scale-105 transition-transform duration-300 mx-auto w-full">SignUp!</button>
                </form>
                <p>Alredy have an account? Please <Link className='text-blue-500 underline' to='/login'>Login</Link></p>
                {
                    errorMessage && <p className='text-red-500 font-bold '>{errorMessage}</p>
                }
                {
                    success && <p className='text-xl text-blue-400'>Uset has created Successfully</p>
                }
            </div>
        </div>

    );
};

export default SignUp;