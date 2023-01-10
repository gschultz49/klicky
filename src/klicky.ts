export const Klicky = () => {
  console.log("klickly ran!");
};

document.addEventListener("click", function(event){
//   console.log("clicked");
  console.log(event);
})


function getEventType(event) {
	console.log (event)
//   const log = document.getElementById('log');
//   log.innerText = `${event.type}\n${log.innerText}`;
}

document.addEventListener('keydown', getEventType, false); 





// console.log('keydown')



//when key presses down the first line changes and prints "you pressed" on console
//and any key the user presses will appear beside it.

// window.addEventListener('keydown', function (e) {
//   document.querySelector('p').innerHTML = `You pressed ${e.key}`;
// }, false);

//when user presses any key it prints the string "key is going down". 
// document.addEventListener("keydown", function(){
//   console.log("key is going down");
// })


// let log = document.querySelector('#log');
// document.addEventListener('click', logKey);

// function logKey(e) {
//   log.textContent = `The alt key is pressed: ${e.altKey}`;
// }

// //using mouseevent to hover over button and print MouseOver and Mouse Event

// 		const something = document.getElementById("clickIt");
// 		const bye = document.getElementById("hoverPara");

// 		something.addEventListener("click", RespondClick);
// 		else.addEventListener("mouseover", RespondMouseOver);
// 		something.addEventListener("mouseout", RespondMouseOut);

// 		function RespondMouseOver() {
// 			document.getElementById("effect").innerHTML +=
// 					"MouseOver Event" + "<br>";
// 		}

// 		function RespondMouseOut() {
// 			document.getElementById("effect").innerHTML +=
// 					"MouseOut Event" + "<br>";
// 		}

// 		function RespondClick() {
// 			document.getElementById("effect").innerHTML +=
// 					"Click Event" + "<br>";
// 		}

// 		document.addEventListener('MouseOut Event" + "<br>', getEventType, false); 
// 		console.log("hi");



// 		function rainbow(event) {
//             if (event.altKey) {
//                 alert("Alt key is pressed.");
//             } else {
//                 alert("Alt key is not pressed.");
//             }