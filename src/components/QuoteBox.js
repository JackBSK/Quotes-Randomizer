import React, { useState } from "react";
import Data from "./quotes.json";

const QuoteBox = () => {
  //estas 3 lineas son para los estados iniciales
  const [quotes, setQuotes] = useState("Random Quotes press 'Random Quote' !!!!");
  const [author, setAuthor] = useState("<------Let's Go!");
  const [bgColor, setColor] = useState("#111111");

  const obtainQuote = () => {
    const texts = Data.quotes;
    //Metodo random "https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random"
    const random = Math.floor(Math.random() * texts.length);
    let quote = Data.quotes[random];
    return quote;
  };

  const handleChange = () => {
    const { author, quote } = obtainQuote();
    const colorR = getColor();
    setQuotes(quote);
    setAuthor(author);
    setColor(colorR);
  };

  const getColor = () => {
    //Obtener un color al azar "https://css-tricks.com/snippets/javascript/random-hex-color/"
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor)
    return randomColor;
  };

  return (
    <div className="app-container" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="card display-flex flex-direction justify-space-around ">
          <div>
            {quotes}
          </div>
          <div className="display-flex justify-content-end">
            <div>{author}</div>
          </div>
          <div className="display-flex justify-space-between">
            <div>
              <button style={{ backgroundColor: bgColor }} onClick={handleChange}>
                Random Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
