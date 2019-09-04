import React, { Component } from 'react';
import Auth from './components/Auth';

class App extends Component {
  render() {
    return(
      <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw'}}>
        <Auth />
      </div>);
  }
}

export default App;
