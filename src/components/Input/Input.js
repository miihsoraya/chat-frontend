import React from 'react';

import 'font-awesome/css/font-awesome.min.css';

import './Input.css';

export const Input = ({ message, setMessage, sendMessage }) => (
    <form className="form">
    <textarea
    id='editor_back'
    className="input" 
    type="text" 
    placeholder="Escreva a mensagem..." 
    value={message} 
    onChange={(e) => setMessage(e.target.value)} 
    onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null }
    />
    <button className="sendButton" onClick={(e) => sendMessage(e)}><div><i className="fa fa-chevron-circle-right" /></div></button>
    </form>
);