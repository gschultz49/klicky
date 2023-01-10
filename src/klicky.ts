export const Klicky = () => {
  console.log("klickly ran!");
};

export const clickFunction = () => {
  //Click event specifically for clicking the linkedin icon
  const element = document.getElementById("linkedin");
  element.addEventListener("click", clickFunction);
  console.log("linkedin was clicked");
};

