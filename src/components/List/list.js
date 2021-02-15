import React from 'react';
import './list.scss';

const AudiobookList = ({ audiobooks, onItemEdit, onItemDelete }) => {
  return(
    <div className="audiobooks">
    {audiobooks.map(({fields: audiobook, sys}, index) => (
      audiobook.title ? 
      <div className="card" key={index}>
        <div className="card-body">
          <h5 className="card-title">{audiobook.title['es-MX']}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Autores: {audiobook.authors['es-MX'].join(', ')}</h6>
          <p className="card-text">Narrado por: {audiobook.narrators['es-MX'].join(', ')}</p>
          <div className="cover" >
            <img src={audiobook.cover['es-MX']} alt="cover"/>
          </div>
        </div>
        <div className="card-footer">
          <button onClick={() => { onItemEdit(sys.id); }}>editar</button>
          <button onClick={() => { onItemDelete(sys.id); }}>eliminar</button>
        </div>
      </div>
      : false
    ))}
  </div>)
};

export default AudiobookList;

