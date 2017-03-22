var todoList =	{
		todos: ['hello', 'there', 'bye'],
		displayTodos: function(){
			console.log('My todos are: ' + this.todos);
		}
	};

todoList.displayTodos(); // My todos are: hello,there,bye
