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
            <div>
                {quotes.map((quote) => (
                    <div key={quote.id}>
                         <p>
                            <strong>{quote.book?.title}</strong>
                        </p>
                        <p>
                            <strong>{quote.text}</strong>
                        </p>
                    </div>
                ))}
            </div>
        </>

    )
}