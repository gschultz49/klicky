export const Klicky = () => {
  console.log("klickly ran!");
};

//Click event specifically for clicking the linkedin icon
export const clickFunction = () => {
  const element = document.getElementById("linkedin");
  if(element != null) //prevents element null error
  {
    element.addEventListener("click", clickFunction);
  }
  console.log("linkedin was clicked");
};

