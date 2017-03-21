var arr = ['hello', 'there', 'bye'];

function displayTodos(){
	console.log('My todos are: ' + arr);
}

function addTodos(todo){
	arr.push(todo)
}

function changeTodos(index, newTodo){
	arr[index] = newTodo;
}

function deleteTodos(position){
	arr.splice[position, 1];
}

//As we already know,the first passed argument of the `splice` method,
//represents the place where the deleting will begin.The second passed 
//argument represents the amount of items that will get deleted AFTER 
//the starting position.We need to delete one item per time we call the method 
//so the second argument will always be 1.

deleteTodos(1);
displayTodos(); //My todos are: hello, bye