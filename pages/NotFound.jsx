


// import React from 'react'
//import { Link } from "react-router-dom";

// const NotFound = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default NotFound


const NotFound = () => {
    return (
      <div style={{ textAlign: 'center', margin: '50px' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist</p>
        <br />
        <img className="page404" src="https://w3-lab.com/wp-content/uploads/2022/09/FOR-WEB-404-astronaut.jpg" alt="" />
        {/* <Link href="/">Go back to Home</Link> */}
      </div>
    );
  };
  
  export default NotFound;
