import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Pizzas from './components/Pizzas';
// import Beers from "./components/Beers"
// import Button from './components/Button';
// import beersData from "./data/data"



function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cart count={count} />
      <Pizzas setCount={setCount}/>
    </div>
  );
}

export default App;
