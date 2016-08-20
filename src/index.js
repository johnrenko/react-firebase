import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAacErIIqniUZnqjGySw7GsQrK-kogzOrQ",
  authDomain: "chat-af96c.firebaseapp.com",
  databaseURL: "https://chat-af96c.firebaseio.com",
  storageBucket: "",
};

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
