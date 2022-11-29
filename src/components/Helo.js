import './Helo.css';

function Helo(props) {
  console.log(props)
  return (
    <div className="Helo">I am {props.name} and {props.age} years old
    </div>
  );
}

export default Helo;
