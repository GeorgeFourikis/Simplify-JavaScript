var todoList =	{
		todos: [],
		displayTodos: function(){
			if(this.todos.length === 0){
				console.log('there are no todos here');
			}else{
				for(var i = 0; i < this.todos.length; i++){
					console.log('My todos are: ' ,this.todos[i].todoText);
				}
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

//We used a very simple logic here.The only time when we wont have 
//todos inside of our array will be when the array will be empty,
//which means that our todos.length would be equal to 0.Notice, that
//we can either use ==  or  ===

// == checks for equality of value.
// === checks for equality of both value and type.