// import { getFirestore, doc, setDoc } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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

const click_events = doc(firestore, 'events/tracking');
export function userData(){
  // const simplified_arr = click_arr.map(item =>  ({ type: item?.type || "no value" , name: "mouseobject"}))
  const simplified_arr = click_arr.map(item => { 
    if(item instanceof window.KeyboardEvent){
      return {name: "Keyboard", type: item?.type, keyPressed: item?.key}
      
    }
    else if(item instanceof window.PointerEvent){
      return {name: "Pointer", type: item?.type, tag: item?.target.localName, x_coord: item?.pageX, y_coord: item?.pageY}
    }
    else if(item instanceof window.MouseEvent){
      return {name: "Mouse", type: item?.type}
    }
    else{
      return {name: "None", type: item?.type}
    }
  })

    const docData = {
    all_events: simplified_arr
  };
  setDoc(click_events, docData, {merge: true})
    .then(() => {
        console.log('This value has been written to the database');
    })
    .catch((error) => {
        console.log(`I got an error! ${error}`);
    });
}

/**
 * Throttles a callback over a specified interval
 * Use this for the mousemove to avoid having it spam the page
 *
 * @param {Function} callback a callback function to be executed after a `interval` delay
 * @param {Number} interval the time delay in milliseconds for the function to be executed
 * @return {void}
 */
function throttle(callback: Function, interval = 2000) {
  let enableCall = true;

  return function (...args: any) {
    if (!enableCall) return;

    enableCall = false;
    callback.apply(this, args);
    setTimeout(() => (enableCall = true), interval);
  };
}

export const ButtonClick = () => {
  document.getElementById("evt_button")?.click();
} 
  
let click_arr = [];

export const Klicky = (dataSelector: string) => {

  document.getElementById("button_click").addEventListener("click", function (evt) {
    console.log("All events:", click_arr);
    userData();
  });

  document.addEventListener("click", function (evt) {
    // selector mode

    if (dataSelector) {
      const possibleAttr = evt.target.attributes[dataSelector];
      // @ts-ignore
      if (possibleAttr != null) {
        console.log("SELECTOR MODE");
        console.log(dataSelector + " tag clicked", evt);
        displayClicksAndDate(evt);
        click_arr.push(evt);
      }

    } else {    // all mode
      console.log("ALL MODE");
      // @ts-ignore
      console.log(evt.target.localName + " clicked", evt);
      displayClicksAndDate(evt);
      click_arr.push(evt);
    }
  });

  //keyboard event
  document.addEventListener("keydown", getEventType, false);

  // Mouse Event
  const button = document.querySelector("button");
  button?.addEventListener("mousemove", (event) =>
    throttle(() => {
      console.log(event);
    })
  );

  //Mouse event coordinates and live time in the Event Viewer 
  let screenLog = document.querySelector("#screen-log");
  document.addEventListener("mousemove", throttle(logKey));

function logKey(e) {
  screenLog.innerText = `
    Mouse event occurring in these coordinates: ${e.clientX}, ${e.clientY}`;
    console.log("You are hovering over the page");
    let date = new Date();
    dateTime(date);
    console.log(e);
    const datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;
click_arr.push(e);
}
// outputs the keyboard events on the event viewer
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener('keydown', (event) => output.textContent = `Key board event occurred: You pressed "${event.key}".${click_arr.push(event)}`);




  function getEventType(event) {
    console.log(event);
  }

  const once = {
    once: false,
  };

  let onceHandler = (evt) => {
    console.log("You have clicked the page");
    displayClicksAndDate();
    let date = new Date();
    dateTime(date);
  };

  let displayClicksAndDate = (evt) => {
    const tag = document.getElementById('filtered_data');

    let dt = new Date();
    const datetime = document.createElement("li");
    datetime.innerHTML = dateTime(dt);
    tag.appendChild(datetime);

    // shows what html tag is clicked
    const para = document.createElement("li");
    para.innerText = evt.target.localName + " tag clicked!";
    tag.appendChild(para);

    // shows the x and y coordinates of mouse click
    const coord = document.createElement("li");
    coord.innerText = "x: " + evt.pageX + " y: " + evt.pageY;
    tag.appendChild(coord);

    const space = document.createElement("br");
    tag.appendChild(space);
  }

  let dateTime = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    let timeValue;
    if (hours > 0 && hours <= 12) {
      timeValue = "" + hours;
    } else if (hours > 12) {
      timeValue = "" + (hours - 12);
    } else if (hours == 0) {
      timeValue = "12";
    }

    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
    timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
    timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

    const msg = `${month}/${day}/${year}` + ' ' + timeValue;

    console.log(`Click event occurred at: ${month}/${day}/${year} ${hours}:${minutes}:${seconds}`);
    return msg;
  }
};
