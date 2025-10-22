

// ORIGINAL CODE
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




const PersonalPage = () => {


    const [userId, setUserId] = useState('');
    const [token, setToken] = useState('');
    const [message, setMessage] = useState('');
    const [onlinename, setOnlinename] = useState('');
    const [dashboardData, setDashboardData] = useState(null);
  


    const fetchDashboard = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/users/personal-page', { withCredentials: true });

            setUserId(response.data.userId);
            setToken(response.data.token); // Set the token in state to display
            setDashboardData(response.data);
            setOnlinename( response.data.onlinename )

            console.log("personal page dashboard data =========> ", dashboardData)
            console.log("<PersonalPage> 1 ", response)
            console.log("<PersonalPage> 2 ", response.data)
            //console.log("<PersonalPage> 3 ", response.data.data)

            console.log("Welcome, ", response.data.onlinename);
        } catch (error) {
            setMessage('Access denied! Please log in.');
            setDashboardData(null);

            setUserId('');
            setToken('');
        }
    };


        // useEffect() to fetch dashboard data on component mount
        useEffect(() => {
            fetchDashboard();
        }, []); // Empty dependency array to run once on mount




return (
    <div className='personal-page-dashboard'>
        {message ? (
            <div className='personal-page-message'>
                <h1>PERSONAL PAGE</h1>
                <h2>{message}</h2>
                <br />
                <Link to='/login'>Log In To Get Access</Link>
            </div>
        ) : (
            token && (
                <div>
                    {/* <h1> Personal Page of {onlinename}</h1> */}
                    <h1> Personal Page of the: <span className='personal-page-user'> {onlinename}  </span> </h1>
                    {/* <h2>Welcome, {userName}</h2> Display the user name */}
                       <br />
                    <h2>----------Dashboard---------</h2>
                       <br />
                    <p>{dashboardData.message} <span className='personal-page-user'> {onlinename}  </span> </p>
                       <br />
                    <p> <span className='personal-page-user'> User ID: </span> {dashboardData.userId}</p>
                       <br />
                    {token && <span><span className='personal-page-user'> Token: </span> {token}</span>}
                </div>
            )
        )}
    </div>
);

}

export default PersonalPage















// option 2, it works
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const PersonalPage = () => {
//     const [userId, setUserId] = useState('');
//     const [token, setToken] = useState('');
//     const [message, setMessage] = useState('');
//     const [onlinename, setOnlinename] = useState('');
//     const [dashboardData, setDashboardData] = useState(null);

//     const fetchDashboard = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/api/users/personal-page', { withCredentials: true });

//             setUserId(response.data.userId);
//             setToken(response.data.token); // Set the token in state to display
//             setDashboardData(response.data);
//             setOnlinename(response.data.onlinename);
            
//             console.log("1111111111111111", response)
//             console.log("2222222222222222", response.data)
//             console.log("Welcome, ", response.data.onlinename);
//         } catch (error) {
//             setMessage('Access denied! Please log in.');
//             setDashboardData(null);
//             setUserId('');
//             setToken('');
//             console.error('Error fetching data: ', error.response ? error.response.data : error.message);
//         }
//     };

//     useEffect(() => {
//         fetchDashboard();
//     }, []);

//     const renderMessage = () => (
//         <div className='personal-page-message'>
//             <h1>PERSONAL PAGE</h1>
//             <h2>{message}</h2>
//             <br />
//             <Link to='/login'>Log In To Get Access</Link>
//         </div>
//     );

//     const renderDashboard = () => (
//         <div>
//             <h1> Personal Page of the: <span className='personal-page-user'> {onlinename}  </span> </h1>
//             <h2>----------Dashboard---------</h2>
//             <p>{dashboardData.message}</p>
//             <p>User ID: {dashboardData.userId}</p>
//             {token && <span>Token: {token}</span>}
//         </div>
//     );

//     return (
//         <div className='personal-page-dashboard'>
//             {message ? renderMessage() : token && renderDashboard()}
//         </div>
//     );
// };

// export default PersonalPage;
