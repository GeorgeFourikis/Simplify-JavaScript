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
			}
		}
	};


todoList.addTodos("hello")
todoList.addTodos("there")
todoList.addTodos("man")

todoList.toggleCompleted(0)
todoList.toggleCompleted(1)
todoList.toggleCompleted(2)


todoList.displayTodos();

todoList.toggleAll();

todoList.displayTodos();

//Lets see what is happening in our code.

//First we create a function within our object that will handle the 
//toggleAll functionality.

//Second,we assign 2 new variables(counters).1 for the total elements 
// of our array and one more for the elements that have the .completed 
// property set as true.

//Third,we need to make a for loop in order to give a value to the variable
//that has to do with the completed property.The logic is simple,if the
//property holds the value of true,our variable increments by one.

// Fourth,we make an if statement that checks if the 2 counters
// (completed and all todos) are equal.Again the logic is pretty straight 
// forward,if the completed counter is equal to our general todos counter,
// then we use a for loop to change the value of the completed property 
// one by one.