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
		changeTodos: function(index, todoText){
			this.todos[index].todoText = todoText;
			this.displayTodos();
		},
		deleteTodos: function(position){
			this.todos.splice(position, 1);
			this.displayTodos();
		}
	};

//go to console and add something inside the array
todoList.addTodos("Hello World") //My todos are:  [Object]
									//0: Object
									//completed: false
									//	todoText: "Hello World"

todoList.changeTodos(0, "Hello World!!!!") //My todos are:  [Object]
											//0: Object
										//completed: false
									//	todoText: "Hello World!!!!"
