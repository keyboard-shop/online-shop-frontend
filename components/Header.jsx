


import React from 'react'

import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';// Redux
import { userOut } from '../src/redux/user/userSlice';// Redux
import { useDispatch } from 'react-redux';// Redux
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const { currentUser } = useSelector((state) => state.user);
    //console.log("USER token logged-In ===> ", currentUser)


    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSignOut = async () => {
        try {
            //await fetch('/api/auth/signout');
            //await Axios.get('http://localhost:8080/api/users/out') <=== Axios Does not work

            const response = await fetch('http://localhost:8080/api/users/out')
            //const response = await fetch('https://online-shop-backend-three.vercel.app/api/users/out')// it works for Vercel

            if (!response.ok) {
                throw new Error('Network response WAS NOT ok');
            }

            dispatch(userOut())
            navigate('/')

        } catch (error) {
            console.log(error);
        }
    };


    return (

        <header className='header-books'>

            <NavLink
                to="/"
                style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#7600dc' : '#f0f0f0',

                })}
                className="nav-link"
            >
                HOME PAGE
            </NavLink>

            <NavLink
                to="/display-all-books"
                style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#7600dc' : '#f0f0f0',

                })}
                className="nav-link"
            >
                HOME PAGE Test
            </NavLink>





            {/* 
             seller by _id 
            <NavLink
                // to={`/the-seller/:sellerId`}
                to={`/the-seller/${currentUser._id}`}
                style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    background: isActive ? '#7600dc' : '#f0f0f0',

                })}
                className="nav-link"
            >
             All Books by James _id
            </NavLink> */}






            {currentUser ? (
                <>
                    <NavLink
                        to="/dashboard/createBook"
                        style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#545e6f',
                            background: isActive ? '#7600dc' : '#f0f0f0',
                        })}
                        className="nav-link"
                    >
                        Dashboard PAGE
                    </NavLink>




                    {/* seller by _id */}
                    <NavLink
                        // to={`/the-seller/:sellerId`}
                        to={`/the-seller/${currentUser._id}`}
                        style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#545e6f',
                            background: isActive ? '#7600dc' : '#f0f0f0',

                        })}
                        className="nav-link"
                    >
                        All Books by {currentUser?.onlinename} _id
                    </NavLink>




                    <div className='avatar'>
                        I am ONLINE
                        <img className='image-header' src="https://www.areasofmyexpertise.com/wp-content/uploads/2020/01/00924AEA-B1C2-48A5-9B06-89B9008BEE8D-1920x1280.jpg" alt="Description of the image" />

                        <span onClick={handleSignOut} className='out-button'>
                            <h6>Sign Out  {currentUser?.onlinename}</h6>
                        </span>

                    </div>
                </>
            ) : (

                <>
                    <NavLink
                        to="/login"
                        style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#545e6f',
                            background: isActive ? '#7600dc' : '#f0f0f0',
                        })}
                        className="nav-link"
                    >
                        login PAGE
                    </NavLink>

                    <NavLink
                        to="/register"
                        style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#545e6f',
                            background: isActive ? '#7600dc' : '#f0f0f0',
                        })}
                        className="nav-link"
                    >
                        Register PAGE
                    </NavLink>
                </>
            )}












            {/* EXAMPLE */}
            {/* <>
                <NavLink
                    to="/dashboard-example"
                    style={({ isActive }) => ({
                        color: isActive ? '#fff' : '#545e6f',
                        background: isActive ? '#7600dc' : '#f0f0f0',
                    })}
                    className="nav-link"
                >
                    Dashboard Example
                </NavLink>

                <div className='avatar'>
                    I am ONLINE Example
                    <img className='image-header' src="https://www.areasofmyexpertise.com/wp-content/uploads/2020/01/00924AEA-B1C2-48A5-9B06-89B9008BEE8D-1920x1280.jpg" alt="Description of the image" />
                    {/* ORIGINAL <span onClick={handleSignOut} className='out-button'> */}
            {/* EXAMPLE */}
            {/* <span className='out-button'> 
                        <h6>Sign Out Example</h6>
                    </span>
                </div> */}
            {/* </> */}

        </header>
    )
}
export default Header
