import React, { useEffect, useState } from "react";
// import { pizzas } from "../data/pizza_data.js";
import Pizza from "./Pizza";

function Pizzas() {

  const [pizzas, setPizzas] = useState([])

  useEffect(function () {
    fetch(`http://127.0.0.1:4001/`)
      .then(function(response) {
        return response.json()
      })
      .then(function(data){
        return setPizzas(data)
      })
  },[])

  return (
    <div>
      {pizzas.map((pizza) => (
        <Pizza
          key={pizza.id}
          name={pizza.name}
          id={pizza.id}
          ingredients={pizza.ingredients}
          picture={pizza.picture}
        />
      ))}
    </div>
  );
}

export default Pizzas;
