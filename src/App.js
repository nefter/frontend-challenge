import React, {Component} from 'react';
import AudiobookList from './components/List/list';

import AudioBooks from './services/Api'

class App extends Component {
  render() {
    console.log(this.state.audiobooks)
    return(
      <AudiobookList audiobooks={this.state.audiobooks} />  
      )
  }
  
  state = {
    audiobooks: []
  };
  
  componentDidMount(){
    AudioBooks.get()
    .then(res => res.json())
    .then((data) => {
      this.setState({ audiobooks: data })
    })
  }
};

export default App;