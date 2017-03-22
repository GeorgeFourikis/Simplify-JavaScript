var arr = ['hello', 'there', 'bye'];

function displayTodos(){
	console.log('My todos are: ' + arr);
}

function addTodos(todo){
	arr.push(todo)
}

//i need a way to change the todos i have stored
function changeTodos(index, newTodo){
	arr[index] = newTodo;
}

//here as we can see i pass 2 arguments.
//1) the first is the `index` which will represent the place of our Todo
//insde the array and,
//2)`newTodo` which represents the new value that we want to give.

displayTodos(); //My todos are: hello, there, bye

changeTodos(0, 'hi');
displayTodos(); //My todos are: hi, there, bye

//As we can see here i ve chosen the 0 index which means the first 
//element of the array,and i passed `hi` instead of `hello`, hence
//my array changed.