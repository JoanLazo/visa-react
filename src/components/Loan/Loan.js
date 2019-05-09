import React, { Component } from 'react';
// import './App.css';
import Step1 from './Step1/Step1.js';


class Loan extends Component {
  constructor (props) {
    super(props);
    this.state = {
      quantity: 10000,
      time: 12
    };
  }

  addMoney = (todo) => {
    this.setState({
      quantity: this.state.quantity -= 1000,
    })
  }

  subtractMoney = (todo) => {
    this.setState({
      quantity: this.state.quantity += 1000,
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <Step1 
      quantity={this.state.quantity} 
      time={this.state.time}
      addMoney={this.addMoney}
      subtractMoney={this.subtractMoney}
      onChange={this.onChange}
      />
    )
      }
  }


export default Loan;