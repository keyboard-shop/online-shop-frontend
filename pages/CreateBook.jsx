


import React from 'react'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateBook = () => {

    const [bookname, setBookname] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        
        e.preventDefault();
    
// IT WORKS ==========================================================
const bookData = {
    bookname,
    author,
    price
};

try {
    const response = await fetch('http://localhost:8080/api/users/createbook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(bookData), 
    });

    if (response.ok) {
        const data = await response.json();
        if (data.success) {
            alert('Book created successfully!!!');
            navigate('/'); 
        }
    } else {
        const errorText = await response.text(); 
        console.error('Error creating book:', errorText);
        alert('Error creating book: ' + errorText);
    }
} catch (error) {
    console.error('Network error:', error);
    alert('Error creating book: ' + error.message);
}
};
// IT WORKS ===============================================================


    return (

        <div>
            <h1> create Book page </h1>
            <br />
            <h3> fill out the form to publish your book</h3>
            <br />

            <form className='create-book-form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Book Name"
                    value={bookname}
                    onChange={(e) => setBookname(e.target.value)}
                    required
                />

                <br />

                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />

                <br />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />

                 <br />

                <button className='submit-button' type="submit">Create Book</button>
            </form>
        </div>
    )
}
export default CreateBook









    // 1. IT DOES NOT work =================================================================================
    //     const formData = new FormData();
    //     //formData.append('title', name);
    //     formData.append('bookname', bookname);
    //     formData.append('author', author);
    //     formData.append('price', price);
    //     //formData.append('image', image); // Append the image file

    //     console.log('Sending Form Data:', {
    //         bookname,
    //         author,
    //         price
    //     });
    
    //     // Send the form data to the server
    //     const response = await fetch('http://localhost:8080/api/users/createbook', {
    //       method: 'POST',
    //       body: formData,
    //     });
    
    //     if (response.ok) {
    //       const newBook = await response.json();
    //       console.log('Book created:', newBook);
    //     } else {
    //       console.error('Error creating book');
    //     }
    //   };


// 2. It DOES NOT work
//     const bookData = {
//         bookname,
//         author,
//         price
//     };

//     Axios.post('http://localhost:8080/api/users/createbook', bookData)
//         .then((response) => {
//             if (response.data.success) {
//                 alert('Book created successfully!!!');
//                 navigate('/some-route'); // Adjust accordingly
//             }
//         })
//         .catch((error) => {
//             console.error('Error creating book:', error);
//             alert('Error creating book: ' + error.message);
//         });
// };

// 3. IT DOES NOT WORK


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     const formData = new FormData();
    //     formData.append('bookname', bookname);
    //     formData.append('author', author);
    //     formData.append('price', price);
    //     // Uncomment if you are sending an image file
    //     // formData.append('image', image);
    
    //     console.log('Sending Form Data:', {
    //         bookname,
    //         author,
    //         price
    //     });
    
    //     try {
    //         const response = await fetch('http://localhost:8080/api/users/createbook', {
    //             method: 'POST',
    //             body: formData,
    //         });
    
    //         // Check if the response is OK
    //         if (response.ok) {
    //             const newBook = await response.json();
    //             console.log('Book created:', newBook);
    //         } else {
    //             // Log detailed error information
    //             const errorMessage = await response.text(); // Get the error message from the response
    //             console.error('Error creating book:', response.status, errorMessage);
    //         }
    //     } catch (error) {
    //         // Handle network errors or other unexpected issues
    //         console.error('Network error:', error);
    //     }
    // };




    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     const formData = new FormData();
    //     formData.append('bookname', bookname);
    //     formData.append('author', author);
    //     formData.append('price', price);
    //     // Add image if needed
    //     // formData.append('image', image);
    
    //     console.log('Sending Form Data:', {
    //         bookname,
    //         author,
    //         price
    //     });
    
    //     try {
    //         const response = await axios.post('http://localhost:8080/api/users/createbook', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data', // Set content type for form-data
    //             },
    //         });
    
    //         // If the response is successful
    //         console.log('Book created:', response.data);
    //     } catch (error) {
    //         // Handle errors that occur during request
    //         if (error.response) {
    //             // Server responded with a status other than 2xx
    //             const errorMessage = error.response.data.message || error.response.statusText;
    //             console.error('Error creating book:', error.response.status, errorMessage);
    //         } else if (error.request) {
    //             // The request was made but no response was received
    //             console.error('Network error:', error.request);
    //         } else {
    //             // Error setting up the request
    //             console.error('Error:', error.message);
    //         }
    //     }
    // };

//============================================================================================================






