export const Klicky = (selector: string) => {

  document.addEventListener("click", function (evt) {
    // selector mode
    if (selector) {

      console.log("SELECTOR MODE");
      if (selector === evt.target.localName) {
        console.log(selector + " tag clicked", evt);
      } 

    } else {    // all mode
      console.log("ALL MODE");
      console.log(evt.target.localName + " anything clicked", evt);
    }
  })

  console.log("klickly ran!");
};

