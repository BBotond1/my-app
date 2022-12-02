import React, { useEffect, useState } from "react";
// import { pizzas } from "../data/pizza_data.js";
import Pizza from "./Pizza";

function Pizzas({setCount}) {

  const [pizzas, setPizzas] = useState([])
  const [filter, setFilter] = useState("")

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
      <input type="text" name="filter" id="filter" 
      onChange={(event) => {
        setFilter(event.target.value) 
      }}/>
      {pizzas
      .filter((pizza) => pizza.name.toLowerCase().includes(filter.toLowerCase()))
      .map((pizza) => (
        <Pizza
          key={pizza.id}
          name={pizza.name}
          id={pizza.id}
          ingredients={pizza.ingredients}
          picture={pizza.picture}
          setCount={setCount}
        />
      ))}
    </div>
  );
}

export default Pizzas;
