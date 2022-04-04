import React, { useState } from 'react';
import './style.css';
import A from './A';

export default function App() {
  // return <A />;
  const [nome, setNome] = useState('Sarah');
  // return <div> Olá {nome} </div>;
  return (
    <>
      <div>
        <label> nome: </label>
        <input value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      {nome !== '' && <div> Nome: {nome}</div>}
    </>
  );
}
