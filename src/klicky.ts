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
}

//TESTING

// const header = document.querySelector('.header');
// const body__main = document.querySelector('.body__main');
// const sidebar = document.querySelector('.sidebar');
// const feed = document.querySelector('.feed');
// const post = document.querySelector('.post');

// function clicked()
// {
//   console.log("You clicked the page!");
// }

// header?.addEventListener('click', e => {console.log("You clicked the page")})
// body__main?.addEventListener('click', e => {console.log("You clicked the page")})
// sidebar?.addEventListener('click', e => {console.log("You clicked the page")})
// feed?.addEventListener('click', e => {console.log("You clicked the page")})
// post?.addEventListener('click', e => {console.log("You clicked the page")})

// function displayCons()
// {
//   console.log("You clicked the button!");
// };

// function click()
// {
//   document.getElementById("clicked").innerHTML = "You have clicked the button!";
// }

// function clickCount()
// {
//   const click2 = document.getElementById("click2");
//   const isNodeThree = click2?.firstChild.nodeValue === "three";
//   click2?.firstChild.nodeValue = isNodeThree ? "You clicked twice" : "three";
// }

// const listener = document.getElementById("tab");
// listener?.addEventListener("click", clickCount, false);