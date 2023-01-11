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