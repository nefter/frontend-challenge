import React, { useEffect, useState} from 'react';
import AudiobookList from './components/List/list';
import Search from './components/Search/search';
import Modal from './components/Modal/modal';
import AudioBook from './components/Audiobook/audiobook';
import './css/App.scss';
import AudioBooks from './services/Api';


const App = (props) => {

  const [ audiobooks, setAudiobooks ] = useState(); 
  
  const [ filteredAudioBooks, setFilteredAudioBooks ] = useState();
  
  const [ displayModal, setDisplayModal ] = useState(false);
  const [ modalButtonText, setModalTextButton ] = useState();
  const [ audiobookModal, setAudiobookModal ] = useState();
  const [ idAudiobook, setIdAudiobook ] = useState();

  useEffect(() => {
    loadBooksData();
  },[])

  const loadBooksData = () => {
    AudioBooks.get()
    .then(response => response.json())
    .then(r => {
      setAudiobooks(r);
      setFilteredAudioBooks(r.items);
    } )
    .catch(error => console.log('error', error));
  }

  function searchFilter(query, item) {
    return item.fields.title['es-MX'].toLowerCase().indexOf(query.toLowerCase()) > -1;
  }

  const onSearchUpdate = (filteredList) => {
    setFilteredAudioBooks(filteredList);
  }
  
  const onItemDelete = (id) => {
    AudioBooks.delete(id)
    .then(response => response.text())
    .then(result => {
      // cerrar modal
      setDisplayModal(false);
      // recargar datos
      loadBooksData();
    })
    .catch(error => console.log('error', error));
  }

  const openEditModal = (id) => {
    const item = audiobooks.items.filter( (item) => item.sys.id === id)[0].fields;
    setIdAudiobook(id);
    setDisplayModal(true);
    setAudiobookModal(item);
    setModalTextButton('Edit');
  }

  const openAddModal = () => {
    setDisplayModal(true);
    setAudiobookModal(null);
    setModalTextButton('Add');
  }

  const onAudiobookAction = (e) => {
    if(modalButtonText === 'Add') {
      AudioBooks.create(e)
        .then(response => response.json())
        .then(r => {
          // cerrar modal
          setDisplayModal(false);
          // recargar datos
          loadBooksData();
        } )
        .catch(error => console.log('error', error));
    }
    else {
      AudioBooks.update(e, idAudiobook)
        .then(response => response.json())
        .then(r => {
          // cerrar modal
          setDisplayModal(false);
          // recargar datos
          loadBooksData();
        } )
        .catch(error => console.log('error', error));
    }
    return false;
  }
  return (
    <div className="page-content">
      <div className="header">
        <h1 className="title">Audiobook List</h1>
        <Search list={audiobooks?.items} filter={searchFilter} onUpdate={onSearchUpdate}/>
        <button onClick={openAddModal}> Add Audio Book</button>
      </div>

      <div className="content">
        { filteredAudioBooks ? ( 
          <AudiobookList audiobooks={filteredAudioBooks} onItemEdit={openEditModal} onItemDelete={onItemDelete}/> ) 
        : ( <div>No data</div> ) }
      </div>
      <Modal modalStatus={displayModal} onModalClose={setDisplayModal}>
        <AudioBook actionTitle={modalButtonText} onAction={onAudiobookAction} data={audiobookModal}/>
      </Modal>
    </div>
    )
}
export default App;
