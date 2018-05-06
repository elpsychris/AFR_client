import React, { Component } from 'react';
import './App.css';
import { Button } from 'semantic-ui-react'
import Home from './components/Home'
import Banner from './components/Banner'
import LandingNav from './components/landing-comps/LandingNav'
import GuildBoard from './components/common-comps/Guildboard'

import './semantic/dist/semantic.min.css'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
            <LandingNav/>
            <Banner/>
        </header>

        <GuildBoard/>
        
      </div>
    );
  }
}



export default App;
