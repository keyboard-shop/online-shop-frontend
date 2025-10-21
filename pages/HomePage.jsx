



// 333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
// // ORIGINAL it works start ===========================
// import React, { useEffect, useState } from 'react';

// // getAllBooks
// const BooksPage = () => {

//     const [products, setProducts] = useState([]);

//     const fetchProducts = async () => {
//         try {

//             // getAllBooks
//             const response = await fetch('http://localhost:8080/api/users/getallbooks');
//             // it works for Vercel
//             //const response = await fetch('https://online-shop-backend-three.vercel.app/api/users/getallbooks');// it works for Vercel


//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             setProducts(data.data);
//             //console.log("from fetch() ==>", data.data); 
//             //console.log("from fetch() ==>", data); 

//         } catch (error) {
//             console.error('There was a problem with the fetch operation:', error);
//         }
//     };
    

//     useEffect(() => {
//         fetchProducts();
//     }, []);
    

//     return (
//         <div className='books-page'>
//             {products.map((book) => (
//                 <div className='book' key={book._id}>
//                     <div className='book-page-img-wrapper'>
//                         <img src={'https://www.swic.edu/wp-content/uploads/2019/11/SWIC-BellevilleCampus-Fall2019-13-1.jpg'} alt="" />
//                     </div>
//                     <h2>Book title: {book.bookname}</h2>
//                     <p>Author: {book.author}</p>
//                     <p>Price: {book.price}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };
// export default BooksPage;
// // ORIGINAL it works end ===============================


// MODIFIED fom original above start ===========================
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

//import { useSelector } from 'react-redux';
//import { useParams } from 'react-router-dom'; // useParams to show seller _id in localhost URL address
//import { useParams } from 'react-router-dom';


// getAllBooks
const BooksPage = () => {

    const { currentUser } = useSelector((state) => state.user);

    const [products, setProducts] = useState([]);

    //const { currentUser } = useSelector((state) => state.user);// from Redux seller _id
    //const { sellerId } = useParams(); // seller _id from the URL

    const fetchProducts = async () => {
        try {

            // getAllBooks
            const response = await fetch('http://localhost:8080/api/users/getallbooks');//it works
            // testing const response = await fetch('http://localhost:8080/api/users/');// testing

            // it works for Vercel
            //const response = await fetch('https://online-shop-backend-three.vercel.app/api/users/getallbooks');// it works for Vercel


            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data.data);
            //console.log("from fetch() ==>", data.data); 
            //console.log("from fetch() ==>", data); 

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
    

    useEffect(() => {
        fetchProducts();
    }, []);
    


    return (


        // it works
        // <div className='books-page'>
        //     {products.map((book) => (
        //         <div className='book' key={book._id}>
        //             <div className='book-page-img-wrapper'>
        //                 <img src={'https://www.swic.edu/wp-content/uploads/2019/11/SWIC-BellevilleCampus-Fall2019-13-1.jpg'} alt="" />
        //             </div>
        //             <h2>Book title: {book.bookname}</h2>
        //             <p>Author: {book.author}</p>
        //             <p>Price: {book.price}</p>
        //         </div>
        //     ))}
        // </div>

        <article className='article-homepage'>   
             <h1>  {currentUser?.onlinename}  </h1>
             <br />
             <h2> HOME PAGE</h2>
        </article>

    );


};
export default BooksPage;
// MODIFIED fom original above end ===========================

// 33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333


















// fetch products from the server.js  <-- THIS WORKS ===================================================
// const fetchProducts = async () => {
//     try {
//         THIS WORKS
//         const response = await fetch('http://localhost:8080/api/getallbooks');

//         for testing controllers and routes
//         const response = await fetch('http://localhost:8080/api/products');

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();

//         setProducts(data); // the products state
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//     }
// };
// =====================================================================================================


