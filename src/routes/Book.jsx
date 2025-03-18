import { useEffect, useState } from "react";

import { useParams } from "react-router-dom"

import { Nav } from "../com/Nav";

export const Book = () =>{
    const [book, setBook] = useState([])

    const params = useParams();

    useEffect(() => {  
        fetch(`https://seussology.info/api/books/${params.id}`)
        .then((response) => response.json())
        .then((data) => setBook(data))
    }, [])

    console.log(book);

    return(
        <>
            <Nav />
            <div className="book-flex">
            <div>
            <img src={book.image}/>
            </div>
            <div>
            <h1>{book.title}</h1>
            <p>
                <strong>Title: </strong>{book.title_sort}
            </p>
            <p>
                <strong>Year: </strong>{book.year_published}
            </p>
            <p>
                <strong>Description: </strong>{book.description}
            </p>
            </div>
            </div>
        </>
    )
}