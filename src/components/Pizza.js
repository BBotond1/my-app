import React, { useState } from 'react'
import "./Pizza.css"

function Pizza({name, id, ingredients, price, picture}) { /* destructuring object */
  
const [isFavorite, setIsFavorite] = useState(false)
  return (
    <div className={'Pizza' + (isFavorite ? ' fav' : '')}>
      <img onClick = {() =>
        setIsFavorite(true)
      }src="https://img.icons8.com/fluency/48/000000/star.png" alt="csillag" 
      className='favorite'/>
      <h3>{id}</h3>
      <h1>{name} {isFavorite ? 'Kedvenc' : 'Nem kedvenc'}</h1>
      <h3>Osszetevok: {ingredients}</h3>
      <h2>{price}</h2>
    </div>
  )
}

export default Pizza