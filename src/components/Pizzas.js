import React from 'react'
import {pizzas} from "../data/pizza_data.js"
import Pizza from './Pizza'

function Pizzas() {
  return (
    <div>
      {pizzas.map(pizza => <Pizza key={pizza.id} name={pizza.name} id={pizza.id} ingredients={pizza.ingredients}/>)}
    </div>
  )
}

export default Pizzas