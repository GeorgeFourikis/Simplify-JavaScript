functions 
=================================================
	function helloWorld(){
		step1;
		step2;
		step3;
	}

	This is the way a function can be called.

	Example:
	function helloThere(){
		var name = prompt("Give me your name please!")
		alert('My name is ' + name + ' and i made a function!')
	}
	now go to the console and type this:

	helloThere();

	That is the way we call the functions and make them run.
	Alternatively:
		function helloThere(name){
		console.log('My name is ' + name + ' and i made a function!')
	}

	console: 
	helloThere('John');