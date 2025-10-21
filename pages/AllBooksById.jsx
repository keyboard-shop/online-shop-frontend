



// import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

//import { useParams } from 'react-router-dom'; // useParams to show seller _id in localhost URL address
//import { useParams } from 'react-router-dom';

const AllBooksById = () => {

    const { currentUser } = useSelector((state) => state.user);// from Redux seller _id
    console.log("AllBooksById.jsx, current user/seller _id ===> ", currentUser._id)
    console.log("current current line 30", currentUser)

    const [books, setBooks] = useState([]);

    const Seller = currentUser?._id; // currentUser
    //console.log("current seller _id ===> ", Seller)

    useEffect(() => {
        const fetchBooks = async () => {

            // ORIGINAL code
            // try {
            //     //const response = await Axios.get(`/seller/${seller}`);
            //     const response = await fetch(`http://localhost:8080/api/users/the-seller/${seller}`);
            //     if (response.data.success) {
            //         setBooks(response.data.data);
            //     }
            // } catch (error) {
            //     console.error("Error fetching books:", error);
            // }





            try {

                // getAllBooks
                const response = await fetch(`http://localhost:8080/api/users/the-seller/${Seller}`);

                // it works for Vercel
                //const response = await fetch('https://online-shop-backend-three.vercel.app/api/users/getallbooks');// it works for Vercel

                //console.log("seller added to this response: ===> ", response)

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                //setProducts(data.data);
                setBooks(data.data);
                //console.log("from fetch() ==>", data.data); 
                //console.log("from fetch() ==>", data); 

            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }


        };

        if (Seller) {
            fetchBooks();
        }
    }, [Seller]);

    return (
        <div>
            <h1> the Dashboard belongs to: <span className='james-dashboard'>  {currentUser?.onlinename} </span>  </h1>
            <h1 className='h2-james'>{currentUser?.onlinename} Books </h1>
            <h2 className='h2-james'>{currentUser?.onlinename} _id: <span className='james-span-id'> {Seller} </span> </h2>
            <ul className='james-page'>
                {books.map((book) => (
                    <li key={book._id} className='james-book-card'>
                        <h3>{book.bookname}</h3>
                        <p>Author: {book.author}</p>
                        <p>Price: {book.price}</p>
                        <p>Created by: {book.seller.onlinename}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllBooksById
