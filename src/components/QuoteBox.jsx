import React from "react";
import BtnQuote from "./BtnQuote";
import QuoteAndAuthor from "./QuoteAndAuthor";

const QuoteBox = ({quoteRandom, handleClick, colorRandom}) => {

    const objStyle = {
        color: colorRandom
    }

    const objStyleBtn = {
        backgroundColor: colorRandom
    }

    return (
        <article className="card" style={objStyle}>
            <i className="card__icon fa-solid fa-quote-left"></i>
            <QuoteAndAuthor quoteRandom={quoteRandom}/>
            <BtnQuote 
                objStyleBtn={objStyleBtn}
                handleClick={handleClick}
            />
        </article>
    )
}

export default QuoteBox