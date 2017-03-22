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
			// this.displayTodos();
		},
		changeTodos: function(index, todoText){
			this.todos[index].todoText = todoText;
			// this.displayTodos();
		},
		deleteTodos: function(position){
			this.todos.splice(position, 1);
			// this.displayTodos();
		},
		toggleCompleted: function(position){
			var todo = this.todos[position];
			todo.completed = !todo.completed;
			// this.displayTodos();
		},
		toggleAll: function(){
			var totalTodos = this.todos.length;
			var completedTodos = 0;
			for(var i = 0; i < totalTodos; i++){
				if(this.todos[i].completed == true){
					completedTodos++;
				}
			}
			//if everything's true,make everything false
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


todoList.addTodos("hello")
todoList.addTodos("there")
todoList.addTodos("man")

todoList.toggleCompleted(0)
todoList.toggleCompleted(1)


todoList.displayTodos();

todoList.toggleAll();

todoList.displayTodos();

todoList.toggleAll();

todoList.displayTodos();



//We continue from the previouslogic.Since we made the first part this seems
//to be pretty easy now.We are a simple `else` statement away.As you can see
//i use another for loop inside the `else` statement and whatever we find in
//our array,holds the new value of true inside the completed property.