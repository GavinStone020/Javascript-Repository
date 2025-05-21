 //document.getElementById("count-el").innerText = 5 
 
//start at 0
var count = 0;
//var array = [];

//let username = 'Calleigh'
// when clicked increment counts
//let message = "You have three new notifications"

//let myGreeting = username + ", " + message + "!";

//console.log(myGreeting);

function increment() {
	//count = count + 1;
	count = document.getElementById("count-el").innerText = Math.floor(Math.random() * 1000) + 1;
	let count2 = count
	count2 += count
	console.log("the button is clicked");
	
}
function save() {
let countStr = count + " - "
saveEl.textContent += countStr
document.getElementById("count-el").textContent = 0;
count = 0;




//array.push(count);
//document.getElementById("saveEl").innerText = "previous entries: " + array;
}
function reset() {
	//document.getElementById("count-el").textContent = 0;
count = 0;
let countStr = " ";
saveEl.textContent = countStr
saveEl.textContent = "previous entries: "	
}
// This is psuedo code it means nothing :D bla

 