export const Klicky = () => {
  console.log("klickly ran!");
};

const outer = document.querySelector('.outer');

const capture = {
  capture : true
};

const noneCapture = {
  capture : false 
};

const once = {
  once : false 
};

outer?.addEventListener('click', onceHandler, once);

function onceHandler(event)
{
  console.log("You have clicked the page");
  write();
  var date = new Date();
  dateTime(date);
}

function write()
{
  const para = document.createElement("p");
  para.innerText = "You have clicked the page!";
  document.body.appendChild(para);
}

function dateTime(date:Date):void
{
  var month = date.getMonth()+1;
  var day = date.getDate();
  var year = date.getFullYear();

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  console.log("Click event occurred at: "+month+"/"+day+"/"+year+" "+hours+":"+minutes+":"+seconds); 
}