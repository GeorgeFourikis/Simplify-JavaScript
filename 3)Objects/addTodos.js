var todoList =	{
		todos: ['hello', 'there', 'bye'],
		displayTodos: function(){
			console.log('My todos are: ' + this.todos);
		},
		addTodos: function(newTodo){
			this.todos.push(newTodo);
		}
	};

//add a todo
todoList.addTodos('friend')

//check the array again inside the object
todoList.displayTodos() //My todos are: hello,there,bye,friend