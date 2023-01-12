export const Klicky = () => {
  console.log("klickly ran!");
};

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

  console.log("klickly ran!");

};

