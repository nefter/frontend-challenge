import React from 'react';

const AudiobookList = ({ audiobooks }) => {
    return(
        <div>
          <center><h1>Audiobook List</h1></center>
          {audiobooks.map(({fields: audiobook}) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{audiobook.title['es-MX']}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Autores: {audiobook.authors['es-MX'].join(', ')}</h6>
                <p class="card-text">Narrado por: {audiobook.narrators['es-MX'].join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
    )
};

export default AudiobookList;