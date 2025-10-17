


import { Outlet, NavLink } from 'react-router-dom';
import { userOut } from '../src/redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSignOut = async () => {
        try {
            //await fetch('/api/auth/signout');
            //await Axios.get('http://localhost:8080/api/users/out') <=== Axios Does not work

            const response = await fetch('http://localhost:8080/api/users/out')

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

        <div className='dashboard'>

            <h1 className='h1-dashboard'>Seller Dashboard Page</h1>

            <div className="wrapper-dashboard">
                <div className='left-side'>

                    <NavLink
                        to="/dashboard/createBook"
                        style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#fff',
                            background: isActive ? '#ffa500' : '#555555',
                            padding: '15px'
                        })}
                        className="nav-link"
                    >
                        Create Book
                    </NavLink>

                    <NavLink
                        to="/dashboard/comment"
                        style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#fff',
                            background: isActive ? '#ffa500' : '#555555',
                            padding: '15px'
                        })}
                        className="nav-link"
                    >
                        Send a message
                    </NavLink>

                    <NavLink
                        to="/dashboard/like"
                        style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#fff',
                            background: isActive ? '#ffa500' : '#555555',
                            padding: '15px'
                        })}
                        className="nav-link"
                    >
                        Like the buyer
                    </NavLink>

                    <span onClick={handleSignOut} className='out-button'>
                        <h3>Sign Out</h3>
                    </span>

                </div>

                <div className='right-side'>
                    <Outlet />
                </div>

            </div>
        </div>
    )
}
export default DashboardPage





