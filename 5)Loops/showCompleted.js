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
		}
	};

//here i want to check if .completed is true
// if true prnt with an (x)
// else with ( )

todoList.addTodos("hello")
todoList.addTodos("there")
todoList.addTodos("man")

todoList.toggleCompleted(0)
todoList.toggleCompleted(1)


todoList.displayTodos();

//as we can see the project is getting bigger file by file so it would 
// be better to move to a terminal and use node to run our application.
//For those methods i called i have those results in the terminal

// node showCompleted.js 
// (x) hello 
// (x) there
// (  )  man            

//now toggle again one that has already the true value inside the completed
//property
todoList.toggleCompleted(1)
// (x) hello 
// (  ) there
// (  )  man   