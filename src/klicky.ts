export const Klicky = (dataSelector: string) => {
  const eventViewer = document.querySelector('.event_viewer');
  document.addEventListener("click", function (evt) {
    // selector mode
    if (dataSelector) {
      const possibleAttr = evt.target.attributes[dataSelector];

      // @ts-ignore
      if (possibleAttr != null) {
        console.log("SELECTOR MODE");
        console.log(dataSelector + " tag clicked", evt);
        displayClicksAndDate();
      }

    } else {    // all mode
      console.log("ALL MODE");
      // @ts-ignore
      console.log(evt.target.localName + " anything clicked", evt);
      displayClicksAndDate();
    }
  })

  console.log("klickly ran!");

const rootHtmlBody = document.querySelector('.rootHtmlBody');

const once = {
  once : false 
};

let onceHandler = (evt) => 
{
  console.log("You have clicked the page");
  displayClicksAndDate();
  let date = new Date();
  dateTime(date);
}

let displayClicksAndDate = () => 
{
  const tag = document.getElementById('filtered_data');
  
  const para = document.createElement("li");
  para.innerText = "You have clicked the page!";
  tag.appendChild(para);

  let dt = new Date();
  const datetime = document.createElement("li");
  datetime.innerHTML = dt;
  tag.appendChild(datetime);

  //document.getElementById('filtered_data').innerHTML = dt;
}

let dateTime = (date:Date) =>
{
  const month = date.getMonth()+1;
  const day = date.getDate();
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  console.log(`Click event occurred at: ${month}/${day}/${year} ${hours}:${minutes}:${seconds}`);
}

rootHtmlBody?.addEventListener('click', onceHandler, once);
};
