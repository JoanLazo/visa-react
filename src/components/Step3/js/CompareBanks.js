import React, { Component } from 'react';
import ListOfBanks from './CardBanks';

class CompareBanks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "banks": {
                "list": [
                    {
                        name: "PRESTAMYPE",
                        img: "https://ibb.co/tKxVqX0",
                        loan: 10000,
                        tcea: "12%",
                        payment: 377.78,
                        interest: 3600,
                        total: 13600,
                    },
                    {
                        name: "CAJA HUANCAYO",
                        img: "https://ibb.co/QQMbQW5",
                        loan: 10000,
                        tcea: "20%",
                        payment: 444.44,
                        interest: 6000,
                        total: 16000,
                    },
                    {
                        name: "BCP",
                        img: "https://ibb.co/KKxfzK1",
                        loan: 10000,
                        tcea: "20%",
                        payment: 444.44,
                        interest: 6000,
                        total: 16000,
                    },
                    {
                        name: "CAJA AREQUIPA",
                        img: "https://ibb.co/4sssPKd",
                        loan: 10000,
                        tcea: "25%",
                        payment: 486.11,
                        interest: 7500,
                        total: 17500,
                    }
                ],
            },
            options: "list"
        } 
    }

    handleChange = (e) => {
        this.setState({
          options: e.target.name
        })
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
        const {options, banks } = this.state;
        const size = Object.keys(banks);
        return (
            <div className = "section">
            <h3>¡FELICITACIONES ANITA!</h3>
            <h2>TE OFRECEMOS LOS MEJORES PRÉSTAMOS PARA TI</h2>
            <div className="menu-filters color-gray">
            <p>MONTO</p>
            <p>TIEMPO</p>
            </div>
            <input type="number" min="1000" max="10000" className="filter text-center color-gray">
            </input>
            <select name="select filter">
            <option value="12">12 MESES</option> 
            <option value="24" selected>24 MESES</option>
            <option value="36">36 MESES</option>
            </select>
            <div className="row">
            { size.length ?
            banks[options].map(({ name, img,loan, payment, tcea, interest, total}) => 
            <ListOfBanks name={name} image={img} tcea={tcea} loan={loan} payment={payment} interest={interest} total={total}/>)
            : <span className= "ml-3"> Cargando lista de bancos...</span>}
            </div>
            </div>
        )
    }
}

export default CompareBanks;