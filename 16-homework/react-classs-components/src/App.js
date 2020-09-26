import React, { Component } from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import './components/contacts/style.css';

class App extends Component {
  render(){
    return (
      <div className="contacts-app">
        <Contacts/>
      </div>
    );
  }
}

export default App;