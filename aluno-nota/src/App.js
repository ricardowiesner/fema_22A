import { useState } from 'react';
import './App.css';

function App() {

  const [nome, setNome] = useState();
  const [lista, setLista] = useState([]);


  function adicionar() {
    console.log('adicionar ')
    lista.push(nome);
    setLista([...lista]);

    console.log('lista ', lista)
  }

  return (
    <div className="container">
      <h1>Aluno - Notas</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input type="text" className="form-control" onChange={(event) => setNome(event.target.value)} />
        </div>

        <button type="button" onClick={adicionar}>Adicionar</button>
      </form>

      <ul>
        {
          lista.map((n, index) => {
            return <li key={index}>{n}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
