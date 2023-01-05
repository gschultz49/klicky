export const Klicky = () => {
  console.log("klicky ran!");
};

document.addEventListener("click", function(evt) {
  console.log("clicked");
});