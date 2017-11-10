import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import ContanierMain from './Contaniers/Contanier-main'
import ContanierVibor from './Contaniers/Contanier-vibor'

class App extends Component {
  
  render() {
      return( 
        <div>
          <Header/>
          <ContanierVibor/>
        </div> 
      );
  }
}
export default App;
