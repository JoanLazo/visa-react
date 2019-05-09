import React, { Component } from 'react';
import '../Header/Header.css';
import '../Home/home.css';

class Header extends Component {
    render() {
        return(
            <header className= "bckg-yellow ">
            <nav>
                <ul>
                    <li><a href= "#" className= "main-a p-right-30">MUJER <br></br> EMPRENDEDORA</a></li>
                    <li><a href= "#" className="text-mini p-right-3">Pide tu préstamo</a></li>
                    <li><a href= "#" className="text-mini p-right-3">Red de Contactos</a></li>
                    <li><a href= "#" className="text-mini p-right-3">Haz crecer tu negocio</a></li>
                </ul>
            </nav>
            </header>
        )
    }
}

export default Header;