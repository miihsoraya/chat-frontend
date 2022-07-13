import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';
import img1 from '../../assets/logo.png';

export const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div className='logo'>
        <img src={img1}/>
        </div>
        <div>
        <h3>Usuário</h3>
          <input placeholder="Coloque seu nome" id='usr' className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
        <h3 className='sala'>Sala</h3>
          <input placeholder="Nome da sala" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="button">ENTRAR</button>
        </Link>
      </div>
    </div>
  );
}