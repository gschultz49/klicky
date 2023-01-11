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

<<<<<<< HEAD
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

// Focus event
let inputElem = document.querySelector("input");
window.addEventListener('load', function(event) {
	inputElem.focus(event);
})
=======
let count = 0;
export const click = () => {
  console.log("You Clicked!");
  count+=1;
  document.getElementById("counter").innerHTML = "Wow! You Clicked " + count + " Time(s)";
  document.getElementById("counter").style.fontFamily = "Courier New";
  document.getElementById("counter").style.fontWeight = "Bold";
  document.getElementById("counter").style.textAlign = "center";
  document.getElementById("counter").style.padding = "2.5%";
  document.getElementById("counter").style.textShadow = "2px 1px 1px darkgoldenrod";
  document.getElementById("counter").style.color = "white";
  document.getElementById("counter").style.fontSize = "20px";
};
>>>>>>> 22a45e79fe512fe3211d146b2f198af01d6a6526
