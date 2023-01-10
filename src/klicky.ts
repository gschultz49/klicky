export const Klicky = () => {
  console.log("klickly ran!");
};

document.addEventListener("click", function(){
  console.log("clicked");
})


function getEventType(event) {
  const log = document.getElementById('log');
  log.innerText = `${event.type}\n${log.innerText}`;
}

document.addEventListener('keydown', getEventType, false); 
console.log('keydown')
document.addEventListener('keypress', getEventType, false);
document.addEventListener('keyup', getEventType, false);   

// Mouse events
document.addEventListener('mousedown', getEventType, false); // first
document.addEventListener('mouseup', getEventType, false);   // second
document.addEventListener('click', getEventType, false);     // third


//when key presses down the first line changes and prints "you pressed" on console
//and any key the user presses will appear beside it.

window.addEventListener('keydown', function (e) {
  document.querySelector('p').innerHTML = `You pressed ${e.key}`;
}, false);

//when user presses any key it prints the string "key is going down". 
document.addEventListener("keydown", function(){
  console.log("key is going down");
})


let log = document.querySelector('#log');
document.addEventListener('click', logKey);

function logKey(e) {
  log.textContent = `The alt key is pressed: ${e.altKey}`;
}

//using mouseevent to hover over button and print MouseOver and Mouse Event

		const something = document.getElementById("clickIt");
		const bye = document.getElementById("hoverPara");

		something.addEventListener("click", RespondClick);
		else.addEventListener("mouseover", RespondMouseOver);
		something.addEventListener("mouseout", RespondMouseOut);

		function RespondMouseOver() {
			document.getElementById("effect").innerHTML +=
					"MouseOver Event" + "<br>";
		}

		function RespondMouseOut() {
			document.getElementById("effect").innerHTML +=
					"MouseOut Event" + "<br>";
		}

		function RespondClick() {
			document.getElementById("effect").innerHTML +=
					"Click Event" + "<br>";
		}

		
