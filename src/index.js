import { ButtonClick, Klicky, getclick } from "./klicky";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc } from "firebase/firestore";


ButtonClick();
Klicky('data-tracking');


const news_button = document.querySelector("#news_button");
const news = document.querySelector("#moreNewsSection");

news_button.addEventListener("click", () => {
    if(news.style.display === "none") {
        news.style.display = "block";
        news_button.innerHTML = "Show less 🡡";
    } else {
        news.style.display = "none";
        news_button.innerHTML = "Show more 🡣";
    }
});

const groups_button = document.querySelector("#groups_button");
const groups = document.querySelector("#hide_groups");

groups_button.addEventListener("click", () => {
    if(groups.style.display === "none") {
        groups.style.display = "block";
        groups_button.innerHTML = "Show less 🡡";
    } else {
        groups.style.display = "none";
        groups_button.innerHTML = "Show more 🡣";
    }
});

const hash_button = document.querySelector("#hashtag_button");
const hashtags = document.querySelector("#hide_hash");

hash_button.addEventListener("click", () => {
    if(hashtags.style.display === "none") {
        hashtags.style.display = "block";
        hash_button.innerHTML = "Show less 🡡";
    } else {
        hashtags.style.display = "none";
        hash_button.innerHTML = "Show more 🡣";
    }
});

/* Database */

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

const firestore = getFirestore();

const click_events = doc(firestore, 'events/anything');
export function userData(){
  const docData = {
    all_events: getclick()
  };
  setDoc(click_events, docData, {merge: true})
    .then(() => {
        console.log('This value has been written to the database');
    })
    .catch((error) => {
        console.log(`I got an error! ${error}`);
    });
}

userData();