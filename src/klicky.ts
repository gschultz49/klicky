export const ButtonClick = () => {
  document.getElementById("evt_button")?.click();
}

let click_arr = [];

export const Klicky = (dataSelector: string) => {
  // let click_arr = [];
  document.getElementById("button_click").addEventListener("click", function (evt) {
    console.log("All events : " + click_arr);
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
        click_arr.push(evt.target.localName);
      }

    } else {    // all mode
      console.log("ALL MODE");
      // @ts-ignore
      console.log(evt.target.localName + " clicked", evt);
      displayClicksAndDate(evt);
      click_arr.push(evt.target.localName);
    }
  });

  //keyboard event
  document.addEventListener("keydown", getEventType, false);

  // Mouse Event
  const button = document.querySelector("button");
  button?.addEventListener("mousemove", (event) => {
    console.log(event);
  })

  //Mouse event coordinates and live time in the Event Viewer 
  let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);

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
}
// outputs the keyboard events on the event viewer
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener('keydown', (event) => output.textContent = `Key board event occurred: You pressed "${event.key}".`);




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

    const para = document.createElement("li");
    para.innerText = evt.target.localName + " tag clicked!";
    tag.appendChild(para);
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

