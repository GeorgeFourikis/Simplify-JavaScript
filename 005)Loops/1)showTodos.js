var todoList =	{
		todos: [],
		displayTodos: function(){
			for(var i = 0; i < this.todos.length; i++){
				console.log('My todos are: ' ,this.todos[i].todoText);
			}
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
		},
		toggleCompleted: function(position){
			var todo = this.todos[position];
			todo.completed = !todo.completed;
			this.displayTodos();
		}
	};

//As we can see in order to be able to show our todos,we need a for 
//loop.We use the i counter in order to give our todos array our index
//and then using the dot notation we use todoText as our key of each
//object and we show the value.