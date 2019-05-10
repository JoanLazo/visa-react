import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJUttUdaH34X9035agd_w459xloqq5Kbk",
    authDomain: "visareact.firebaseapp.com",
    databaseURL: "https://visareact.firebaseio.com",
    projectId: "visareact",
    storageBucket: "visareact.appspot.com",
    messagingSenderId: "1057131663849",
    appId: "1:1057131663849:web:64a3080a6ea1d1b1"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

