// Lets say i want to log 10 numbers.
function logTheNums(){
	for(var i = 0; i < 10; i++){
		console.log(i);
	}
} // 0 1 2 3 4 5 6 7 8 9

// you can use debugger for fuctions too
debugger;
logTheNums();

//Then see step by step what is happening.
// ==============================================

// The same thing can be done like so:
function runWithDebugger(myFunction){
	debugger;
	myFunction();
}

// ==============================================
// setTimeout
// ==============================================
setTimeout(function(){
	console.log("hello George");
}, 5000);

// This tells the machine that it should start doing the function after
// 5000 miliseconds or 5 seconds,try that out!

// ==============================================
// forEach
// ==============================================
var myDogs = ['Aris', 'voulati', 'robin', 'batman'];
myDogs.forEach(function(dog){
	console.log(dog + ' is one of my dogs!');
})


// ==============================================
// HIGHER ORDER FUNCTIONS  --- CALLBACK FUNCTIONS
// ==============================================

// HIGHER ORDER FUNCTIONS
	// Functions that accept other functions
	// Enhance the behaviour of other functions

	//example:
		runWithDebugger, setTimeout, forEach and also addEventListener.
		// Those are higher order functions because they accept other 
		// functions and enhance their behaviours.

//CALLBACK FUNCTIONS
	//The functions that are passed into higher orde functions.
		//example:
			//When we pass a function inside the debugger its a callback.