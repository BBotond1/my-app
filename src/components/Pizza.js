import React, { useEffect, useState } from "react";
import "./Pizza.css";

function Pizza({ name, id, ingredients, price, picture,setCount }) {
  /* destructuring object */

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(
    function () {
      console.log(isFavorite);
    },[isFavorite]
  );

  return (
    <div className={"Pizza" + (isFavorite ? " fav" : "")}>
      <img
        onClick={() => setIsFavorite((oldValue)=>!oldValue)}
        src={
          isFavorite
            ? "https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png"
            : "https://img.icons8.com/fluency/48/000000/star.png"
        }
        alt="csillag"
        className="favorite"
      />
      <h3>{id}</h3>
      <h1>{name} {isFavorite ? " - kedvenc" : ""}</h1>
      <h3>Osszetevok: {ingredients}</h3>
      <h2>{price}</h2>
      <img src={"pictures/" + picture} alt="pizza_picture"></img>
      <button onClick={() => {
        setCount((oldValue) => oldValue+1)
      }}>Kosárba</button>
    </div>
  );
}

export default Pizza;
