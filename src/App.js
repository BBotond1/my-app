import './App.css';
import Beers from "./components/Beers"
import Button from './components/Button';
import beersData from "./data/data"



function App() {
  return (
    <div className="App">
      <Button/>
      <Beers data={beersData.cards}/>
    </div>
  );
}

export default App;
