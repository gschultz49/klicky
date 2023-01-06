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
}

function write()
{
  const para = document.createElement("p");
  para.innerText = "You have clicked the page!";
  document.body.appendChild(para);
}