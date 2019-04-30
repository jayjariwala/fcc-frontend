import React from 'react';

const Quotes = (props) => {
    return(
        <blockquote>
            <p id="text">{props.quote}</p>
            <p id="author">{props.author}</p>
        </blockquote>
    )
}

export default Quotes;