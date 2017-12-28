import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,
        Route,
        Switch} from 'react-router-dom';
import Headers from './Header/Header';
import ContanierMain from './Contaniers/Contanier-main';
import ContanierVibor from './Contaniers/Contanier-vibor';
import routes from './routing';
class App extends Component {
  
  render() {
      return( 
          <Router>
            <div>
                <Route path= "/" component = {Headers}/>
                <Route exact path = "/" component = {ContanierMain}/>
                
            {
              routes.map(route => (  
                <Route path={route.path} component={route.component} exact key={route.path} />             
              ))
            
            }
            </div>
          </Router>
      );
  }
}
export default App;
