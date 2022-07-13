import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import img1 from '../../assets/logo.png';

import './TextContainer.css';

export const TextContainer = ({ users }) => (
  <div className='textContainer'>
    <div className='logo'>
        <img src={img1}/>
    </div>
    {users ? (
      <div>
        <h1 className='online'>USUÁRIOS ONLINE</h1>
        <div className='activeContainer'>
          <h2>
            {users.map(({ name }) => (
              <div key={name} className='activeItem'>
                <img alt='Online Icon' src={onlineIcon} />
                {name}
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);
