export const Klicky = () => {
  console.log("klickly ran!");
};

const rootHtmlBody = document.querySelector('.rootHtmlBody');

const once = {
  once : false 
};

rootHtmlBody?.addEventListener('click', onceHandler, once);

function onceHandler(event)
{
  console.log("You have clicked the page");
  write();
  let date = new Date();
  dateTime(date);
}

function write()
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

function dateTime(date:Date):void
{
  let month = date.getMonth()+1;
  let day = date.getDate();
  let year = date.getFullYear();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  console.log("Click event occurred at: "+month+"/"+day+"/"+year+" "+hours+":"+minutes+":"+seconds); 
}