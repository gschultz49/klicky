export const Klicky = (dataSelector: string) => {
  document.addEventListener("click", function (evt) {
    // selector mode
    if (dataSelector) {
      const possibleAttr = evt.target.attributes[dataSelector];

      // @ts-ignore
      if (possibleAttr != null) {
        console.log("SELECTOR MODE");
        console.log(dataSelector + " tag clicked", evt);
      }

    } else {    // all mode
      console.log("ALL MODE");
      // @ts-ignore
      console.log(evt.target.localName + " anything clicked", evt);
    }
  })

  console.log("klickly ran!");
};

const rootHtmlBody = document.querySelector('.rootHtmlBody');

const once = {
  once : false 
};

let onceHandler = (event) => 
{
  console.log("You have clicked the page");
  displayClicksAndDate();
  let date = new Date();
  dateTime(date);
}

let displayClicksAndDate = () => 
{
  const para = document.createElement("p");
  para.innerText = "You have clicked the page!";
  document.body.appendChild(para);

  let dt = new Date();
  const datetime = document.createElement("p");
  datetime.innerHTML = dt;
  document.body.appendChild(datetime);

  document.getElementById('date-time').innerHTML = dt;
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
