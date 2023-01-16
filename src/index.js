import { ButtonClick, Klicky } from "./klicky";

ButtonClick();
Klicky('data-tracking');


/* Firebase App */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLcorYXXxmSJjn7qDMPK_5m-DiD77m8nk",
  authDomain: "click-tracking-data.firebaseapp.com",
  projectId: "click-tracking-data",
  storageBucket: "click-tracking-data.appspot.com",
  messagingSenderId: "940131090453",
  appId: "1:940131090453:web:1294d87473411f56170e1c",
  measurementId: "G-S07EHVYYHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);