import React, { Component } from 'react';
import './App.css';
import { Button } from 'semantic-ui-react'
import Uploader from './components/uploader'
import './semantic/dist/semantic.min.css'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Uploader/>
      </div>
    );
  }
}



export default App;
