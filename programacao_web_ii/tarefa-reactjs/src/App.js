import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [codigo, setCodigo] = useState();
  const [descricao, setDescricao] = useState('');
  const [listaTarefa, setListaTarefa] = useState([]);

  

  useEffect(() => {
    buscar();
  }, []);


  function buscar() {
    axios.get('http://localhost:3100/tarefa').then(resultado => {
      setListaTarefa(resultado.data);
    });
  }
  

  function salvar(event) {
    event.preventDefault();


    let tarefa = {
      codigo: codigo,
      descricao: descricao
    };

    axios.put('http://localhost:3100/tarefa', tarefa).then(() => {
      buscar();

      setCodigo();
      setDescricao('');
    });
  }

  function excluir(tarefa) {
    axios.delete(`http://localhost:3100/tarefa/${tarefa.codigo}`).then((result) => {
      buscar();
    });
  }

  function editar(tarefa) {
    axios.get(`http://localhost:3100/tarefa/${tarefa.codigo}`).then((result) => {
      console.log(result);
      setCodigo(result.data.codigo);
      setDescricao(result.data.descricao);
    });
  }


  return (
    <div className="container">

      <form onSubmit={(event) => salvar(event)}>
        <div className="mb-3">
          <label className="form-label">Descrição</label>
          <input type="text" className="form-control"
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">Salvar</button>

      </form>

      <h3>Lista de Tarefa</h3>

      <table className="table">
        <thead>
          <tr>
            <td>Tarefa</td>
            <td> </td>
          </tr>
        </thead>
        <tbody>
          {
            listaTarefa.map((tarefa, index) => (
              <tr key={index}>
                <td>{tarefa.descricao}</td>
                <td>
                  <button type="button" className="btn btn-link" 
                    onClick={(event) => editar(tarefa)}>[editar]</button>

                  <button type="button" className="btn btn-link" 
                    onClick={(event) => excluir(tarefa)} >[excluir]</button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  );
}

export default App;
