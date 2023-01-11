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
