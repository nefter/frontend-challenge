import React, { useEffect, useState} from 'react';
import AudiobookList from './components/List/list';

import AudioBooks from './services/Api'


const App = (props) => {

  const [ audiobooks, setAudiobooks ] = useState(); // [ `contenido de audiobooks`, fn()  ]

  useEffect(() => {
    AudioBooks.get()
    .then(response => response.json())
    .then(setAudiobooks)
    .catch(error => console.log('error', error));
  },[])


  return audiobooks ? (
    <AudiobookList audiobooks={audiobooks.items}/>
  ) : (<div>No data</div>)
}
export default App;