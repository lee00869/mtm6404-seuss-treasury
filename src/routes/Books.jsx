import { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom"

import { Nav } from "../com/Nav";

export const Books = () => {
    const [books, setBooks] = useState([])

    //fetch users data and set in state
useEffect(() => {
    fetch('https://seussology.info/api/books')
    .then((response) => response.json())
    .then((data) => setBooks(data))  
}, [])

    return(
        <>
             <Nav />
            <h1>Seuss Treasury</h1>
            <div className="books-img">
                {books.map((book) => (
                    <div key={book.id} >
                        <Link to={`/books/${book.id}`}>
                        <img src={book.image}/>
                        </Link>
                    </div>
                ))}
            </div>
        </>

    )
}