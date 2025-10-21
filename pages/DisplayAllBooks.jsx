


import React, { useEffect, useState } from 'react';

const DisplayAllBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {

        const fetchBooks = async () => {

            // ORIGINAL
            // try {
            //     //const response = await fetch('/api/books'); // Adjust the API endpoint as necessary
            //     const response = await fetch('http://localhost:8080/api/users/display-all-books');
            //     if (!response.ok) throw new Error('Network response was not ok');
            //     const data = await response.json();
            //     setBooks(data.data); // Store fetched books data
            // } catch (error) {
            //     console.error('There was a problem with the fetch operation:', error);
            // }

            try {
                // getAllBooks, it works
                const response = await fetch('http://localhost:8080/api/users/display-all-books');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBooks(data.data)
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }


        };
        fetchBooks();

    }, []);

    return (
        <div>
            <h1 className='page-all-books'>All Available Books From All Sellers</h1>
            <ul className='book-list'>
                {books.map((book) => (
                    <li key={book._id} className='book-card'>
                        <h3>Book title: {book.bookname}</h3>
                        <p>Author: {book.author}</p>
                        <p>Price: ${book.price}</p>
                        <p> <span className='seller-card'> Seller: </span> {book.seller.onlinename}</p> {/* Display seller's name */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayAllBooks;
