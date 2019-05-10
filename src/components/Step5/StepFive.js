import React, {Component} from 'react';
import './StepFive.css';

const StepFive = ({}) => {
    return(
        <div className ="container">
        <h3 className="color-yellow bold">¿LISTA PARA EL DESEMBOLSO?</h3>
        <div className="step-one">
            <img className="contact" src="https://i.ibb.co/6yjjBdN/whatsapp-1.png"/>
            <h4 className=" color-yellow bold p-2" >NOS CONTACTAMOS</h4>
            <p className="cnt bold">Nos pondremos en contacto contigo dentro de 24 horas.</p>
        </div>
        <div className="step-two">
            <img  className="money" src="https://i.ibb.co/rdrxgFR/money-bag-with-dollar-symbol.png"/>
            <h4 className="mny color-yellow bold p-2">TE ENTREGAMOS TU DINERO</h4>
            <p className="text bold">Recibirás tu desembolso en 48 horas.</p>
        </div>
        <div className="Client-service">
        <h5 className="client bold">ATENCIÓN AL CLIENTE:</h5>
        <div className="whatsapp">
        <p className="contact-1 bold">WHATSAPP</p>
        <img className="whats" src="https://i.ibb.co/kXqrGnk/whatsapp.png"/> 
        <p className="number">978927345</p>
        </div>
        <div className="call-cent">
        <p className="contact-2 bold">CALLCENTER</p>
        <img className="call" src="https://i.ibb.co/b7z47dJ/call-center-worker-with-headset.png"/>
        <p className="number">01 567 3888</p>
        </div>
        </div>
        <div className="chatbox">
        <img src="https://i.ibb.co/rx5QScf/chatbox.png"/>
        </div>
        </div>
    )
}
export default StepFive;