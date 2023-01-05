export const Klicky = () => {
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
