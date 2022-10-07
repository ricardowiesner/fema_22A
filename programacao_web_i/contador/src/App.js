import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [contador, setContador] = useState(0)

  function contar() {
    console.log('contar');
    setContador(contador + 1);
  }


  return (
    <div className="App">
      <p>Contador</p> 

      <p>{contador}</p>

      <button onClick={contar}>Contar</button>
    </div>
  );
}

export default App;
