import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg3DGYDndd8hLN9q79-hORDOowNyRNpT8",
  authDomain: "footy-finder.firebaseapp.com",
  projectId: "footy-finder",
  storageBucket: "footy-finder.appspot.com",
  messagingSenderId: "752279067517",
  appId: "1:752279067517:web:3027ce1bbe4727f1cf4a14",
  measurementId: "G-PTNV32YMHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
