var todoList =	{
		todos: [],
		displayTodos: function(){
			console.log('My todos are: ' , this.todos);
		},
		addTodos: function(todoText){
			this.todos.push({
				todoText: todoText,
				completed: false
			});
			this.displayTodos();
		},
		changeTodos: function(index, newTodo){
			this.todos[index] = newTodo;
			this.displayTodos();
		},
		deleteTodos: function(position){
			this.todos.splice(position, 1);
			this.displayTodos();
		}
	};

	//What changes here is that instead of having an array of elements
	// i need something more complex to hold the value and the completed
	// property too

//add a new todo
todoList.displayTodos('Hello World'); // My todos are:  [Object]

//as i can see now,i get back a log of an Object.But if i enter the
//object,i can see that i am able to see both properties that i have 
// set before
