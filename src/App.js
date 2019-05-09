import React, { Component } from 'react';
// import './App.css';
import StepOne from './components/StepOne/StepOne.js';
import Home from './components/Home/Home.js';



class App extends Component {

      render() {
          return(
            <div>
              <Home/>
              <StepOne/>
            </div>
            
          )
      }
  }


export default App;