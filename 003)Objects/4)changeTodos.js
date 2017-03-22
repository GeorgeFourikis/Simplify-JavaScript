var todoList =	{
		todos: ['hello', 'there', 'bye'],
		displayTodos: function(){
			console.log('My todos are: ' + this.todos);
		},
		addTodos: function(newTodo){
			this.todos.push(newTodo);
		},
		changeTodos: function(index, newTodo){
			this.todos[index] = newTodo;
		}
	};

//change a todo
todoList.changeTodos(1, 'here')

//check the todo list now
todoList.displayTodos(); //My todos are: hello,here,bye