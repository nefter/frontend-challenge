import React from 'react';
import '../../css/App.css'

const AudiobookList = ({ audiobooks }) => {
  return(
    <div class="page-content">
      <div className="cards">
        <div className="content">
            <center><h1 class="title">Audiobook List</h1></center>
            {audiobooks.map(({fields: audiobook}) => (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{audiobook.title['es-MX']}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Autores: {audiobook.authors['es-MX'].join(', ')}</h6>
                  <p className="card-text">Narrado por: {audiobook.narrators['es-MX'].join(', ')}</p>
                  <img className="cover" src={audiobook.cover['es-MX']} alt="cover"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
};

export default AudiobookList;
