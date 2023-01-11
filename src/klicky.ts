export const Klicky = () => {
  console.log("klickly ran!");
};

// Pointer event
document.addEventListener("click", function(event){
  console.log(event);
})


function getEventType(event) {
	console.log (event)
}
//keyboard event
document.addEventListener('keydown', getEventType, false); 



// Mouse Event
const button = document.querySelector("button")
button.addEventListener("mousemove", event => {
  console.log(event)
})

