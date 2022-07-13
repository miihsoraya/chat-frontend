import React from 'react';

// import onlineIcon from '../../icons/chatIcon.png';
import onlineIcon from '../../icons/chat.jpg';

import './InfoBar.css';

export const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{'Sala: ' + room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/" className='fechar'>X</a>
    </div>
  </div>
);