import React from 'react';

const AudiobookList = ({ audiobooks }) => {
    return(
        <div>
          <center><h1>Audiobook List</h1></center>
          {audiobooks.map((audiobook) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{audiobook.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{audiobook.authors.join(', ')}</h6>
                <p class="card-text">{audiobook.narrators.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
    )
};

export default AudiobookList;