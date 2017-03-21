var arr = ['hello', 'there', 'bye'];


function displayTodos(){
	console.log('My todos are: ' + arr);
}

//we assume that we already have the array arr from 
// the displayTodos.js file

function addTodos(todo){
	arr.push(todo)
}

//How can i call it and use it
addTodos('goodmorning');

//now i call the displayTodos again
displayTodos(); // My todos are: hello, there, bye, goodmorning

// ======================================
//As we can see, the todo variable inside the parentheses [addTodos(todo)]
//doesn't really matter, i could call it 'props', 'args' or whatever.
//So 'goodmorning' is passed as an argument inside the function addTodos.
