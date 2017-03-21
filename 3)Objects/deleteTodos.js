var todoList =	{
		todos: ['hello', 'there', 'bye'],
		displayTodos: function(){
			console.log('My todos are: ' + this.todos);
		},
		addTodos: function(newTodo){
			this.todos.push(newTodo);
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

//delete a todo
todoList.deleteTodos(1) // My todos are: hello,bye