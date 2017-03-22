var todoList =	{
		todos: [],
		displayTodos: function(){
			if(this.todos.length === 0){
				console.log('there are no todos here');
			}else{
				for(var i = 0; i < this.todos.length; i++){
					if(this.todos[i].completed == true){
						console.log('(x)', this.todos[i].todoText)	
					}else{
						console.log('(  )', this.todos[i].todoText)							
					}
				}
			}
		},
		addTodos: function(todoText){
			this.todos.push({
				todoText: todoText,
				completed: false
			});
		},
		changeTodos: function(index, todoText){
			this.todos[index].todoText = todoText;
		},
		deleteTodos: function(position){
			this.todos.splice(position, 1);
		},
		toggleCompleted: function(position){
			var todo = this.todos[position];
			todo.completed = !todo.completed;
		},
		toggleAll: function(){
			var totalTodos = this.todos.length;
			var completedTodos = 0;
			for(var i = 0; i < totalTodos; i++){
				if(this.todos[i].completed == true){
					completedTodos++;
				}
			}
			if(completedTodos == totalTodos){
				for(var i = 0; i < totalTodos; i++){
					this.todos[i].completed = !this.todos[i].completed
				}
			}else{
				for(var i = 0; i < totalTodos; i++){
					this.todos[i].completed = true
				}
			}
		}
	};

	//i am having access to the button now.
	var displayTodosButton = document.getElementById('displayTodosButton');

	//now run the todoList.displayTodos();
	displayTodosButton.addEventListener('click', function(){
		todoList.displayTodos();
	})