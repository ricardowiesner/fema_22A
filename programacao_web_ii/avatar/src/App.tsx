import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { AvatarCadastro } from './components/avatar/AvatarCadastro';
import { AvatarLista } from './components/avatar/AvatarLista';
import { Home } from './components/home/Home';

export default function App() {
  return (
    <>
      <h1>Olá avatar</h1>

      <ul>
        <li> <Link to={'/'}>Home</Link> </li>
        <li> <Link to={'/avatar'}>Avatar</Link> </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avatar" element={<AvatarLista />} />
        <Route path="/avatar/cadastro" element={<AvatarCadastro />} />
        <Route path="/avatar/cadastro/:id" element={<AvatarCadastro />} />
      </Routes>
      

    </>
  );
}

