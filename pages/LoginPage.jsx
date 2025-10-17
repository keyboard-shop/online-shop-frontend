


import React from 'react'
import { useState } from 'react'
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import { signInSuccess } from '../src/redux/user/userSlice';// for Redux Toolkit
import { useDispatch } from 'react-redux';// for Redux Toolkit


const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const dispatch = useDispatch();// for Redux Toolkit

    Axios.defaults.withCredentials = true;// IMPORTANT

    const handleSubmit = (e) => {
        e.preventDefault()
        //Axios.post('http://localhost:8080/api/users/login', { email, password })
           
        // it works for Vercel
        Axios.post('https://online-shop-backend-three.vercel.app/api/users/login', { email, password })// it works for Vercel
            .then((response) => {
                //console.log(response)

                if (response.status) {
                    console.log("Login token:", Boolean(response.status))
                    //alert('USER logged-in successfully !!!')
                    alert('Vercel USER logged-in successfully using Vercel !!!')


                    // original  dispatch(signInSuccess(response));
                    dispatch(signInSuccess(response.data.user));// Redux ToolKit <<<<testing ====================================

                    navigate('/dashboard/createBook')
                }
            })
            .catch((error) => {
                console.log(error)
                alert(error)
            });
    }

    return (
        <div className='signup-wrapper'>
            <h2>Log In</h2>
            <form className='create-book-form' onSubmit={handleSubmit}>

                <label htmlFor="email">Email:</label>
                <input type="email" autoComplete='off' placeholder='enter email'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />

                <label htmlFor="password">Password:</label>
                <input type="password" autoComplete='off' placeholder='enter password'
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />

                <button className='submit-button' type='submit'>Log In</button>
                <br />
                <p>Dont have an account? <Link to={'/register'}>Register</Link></p>
            </form>

        </div>
    )
}
export default LoginPage






