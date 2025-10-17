


import React from 'react'
import { useState } from 'react'
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {

    const [onlinename, setOnlineName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        //Axios.post('http://localhost:8080/api/users/register', { onlinename, email, password })
        // it works for Vercel
        Axios.post('https://online-shop-backend-three.vercel.app/api/users/register', { onlinename, email, password })// it works for Vercel
            .then((response) => {
                if (response.data.status) {
                    ///alert('USER registered successfully !!!')
                    alert(' VERCEL USER registered successfully using VERCEL !!!')
                    navigate('/login')
                }
            }).catch((error) => {
                console.log(error)
                alert(error)
            });
    }

    return (
        <div className='signup-wrapper'>
            <h2>Register a new User</h2>
            <form className='create-book-form' onSubmit={handleSubmit}>
                <label htmlFor="onlinename">Online Name:</label>
                <input type="text" placeholder='online name'
                    onChange={(e) => setOnlineName(e.target.value)}
                />

                <br />

                <label htmlFor="email">Email:</label>
                <input type="email" autoComplete='off' placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />

                <label htmlFor="password">Password:</label>
                <input type="password" autoComplete='off' placeholder='*******'
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />

                <button className='submit-button' type='submit'>Register</button>
                <br />
                <p>Have an account? <Link to={'/login'}>Login</Link></p>
            </form>
        </div>
    )
}

export default RegisterPage








