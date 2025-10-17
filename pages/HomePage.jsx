

import React, { useEffect, useState } from 'react';

const BooksPage = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {


            //const response = await fetch('http://localhost:8080/api/users/getallbooks');
            const response = await fetch('https://online-shop-backend-three.vercel.app/api/users/getallbooks');


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
        <div className='books-page'>
            {products.map((book) => (
                <div className='book' key={book._id}>
                    <div className='book-page-img-wrapper'>
                        <img src={'https://www.swic.edu/wp-content/uploads/2019/11/SWIC-BellevilleCampus-Fall2019-13-1.jpg'} alt="" />
                    </div>
                    <h2>Book title: {book.bookname}</h2>
                    <p>Author: {book.author}</p>
                    <p>Price: {book.price}</p>
                </div>
            ))}
        </div>
    );
};
export default BooksPage;












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


