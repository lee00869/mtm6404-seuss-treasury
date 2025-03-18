import { useEffect, useState } from "react";

import { Nav } from "../com/Nav";

export const Quotes = () => {
    const [quotes, setQuotes] = useState([])

    //fetch users data and set in state
useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
    .then((response) => response.json())
    .then((data) => setQuotes(data))  
}, [])

console.log(quotes);

    return(
        <>
             <Nav />
            <h1>Seuss Treasury</h1>
            <div className="quote-flex">
                {quotes.map((quote) => (
                    <div key={quote.id} className="quote-border">
                         <p>
                            <strong>Book Title: </strong>{quote.book?.title}
                        </p>
                        <p>
                            <strong>Quote: </strong> {quote.text}
                        </p>
                    </div>
                ))}
            </div>
        </>

    )
}