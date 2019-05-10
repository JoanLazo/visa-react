import React, { Component } from 'react';
import ComponentStepOne from './ComponentStepOne/ComponentStepOne.js';


class StepOne extends Component {
  constructor (props) {
    super(props);
    this.state = {
      quantity: 10000,
      time: 12
    };
  }

  addMoney = () => {
    this.setState({
      quantity: this.state.quantity -= 1000,
    })
  }

  subtractMoney = () => {
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
      <ComponentStepOne 
      quantity={this.state.quantity} 
      time={this.state.time}
      addMoney={this.addMoney}
      subtractMoney={this.subtractMoney}
      onChange={this.onChange}
      nextStep={this.props.nextStep}
      />
    )
      }
  }


export default StepOne;