export const Klicky = () => {
  console.log("klickly ran!");
};

document.addEventListener("click", function(){
  console.log("clicked");
})


function getEventType(event) {
  const log = document.getElementById('log');
  log.innerText = `${event.type}\n${log.innerText}`;
}


// Mouse events
document.addEventListener('mousedown', getEventType, false); // first
document.addEventListener('mouseup', getEventType, false);   // second
document.addEventListener('click', getEventType, false);     // third


window.addEventListener('keydown', function (e) {
  document.querySelector('p').innerHTML = `You pressed ${e.key}`;
}, false);

document.addEventListener("keydown", function(){
  console.log("key is going down");
})





window.addEventListener('keydown', function (e) {
  document.querySelector('p').innerHTML = `You pressed ${e.key}`;
}, false);

