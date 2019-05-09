import React, { Component } from 'react';
// import './App.css';
import Loan from './components/Loan/Loan.js';
import Home from './components/Home/Home.js';



class App extends Component {

      render() {
          return(
            <div>
              <Home/>
              <Loan/>
            </div>
            
          )
      }
  }


export default App;