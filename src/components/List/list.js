import React from 'react';
import '../../css/App.css'

const AudiobookList = ({ audiobooks }) => {
  return(
    audiobooks.map(({fields: audiobook}, index) => (
      <div className="card" key={index}>
        <div className="card-body">
          <h5 className="card-title">{audiobook.title['es-MX']}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Autores: {audiobook.authors['es-MX'].join(', ')}</h6>
          <p className="card-text">Narrado por: {audiobook.narrators['es-MX'].join(', ')}</p>
          <img className="cover" src={audiobook.cover['es-MX']} alt="cover"/>
        </div>
      </div>
    ))
    )
};

export default AudiobookList;
