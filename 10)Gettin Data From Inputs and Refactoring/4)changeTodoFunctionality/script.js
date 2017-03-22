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

var handlers ={
	displayTodos: function(){
		todoList.displayTodos();
	},
	toggleAll: function(){
		todoList.toggleAll();
	},	
	addTodos: function(){
		//save the specific element to a variable
		var addTodoText = document.getElementById('addTodoText');
		if(addTodoText.value == ''){
			alert('oops,you are trying to add an empty Todo!');
		}else{
		//grab the value of the element and pass it as an argument
		//to the existing function
		todoList.addTodos(addTodoText.value);
		//after the function runs,it should leave the input empty
		addTodoText.value = '';
		}

	},
	changeTodos: function(){
		var changeTodoText = document.getElementById('changeTodoText');
		var changeTodoIndex = document.getElementById('changeTodoNum');
		if(todoList.todos[changeTodoIndex.value]){
			todoList.changeTodos(changeTodoIndex.valueAsNumber, changeTodoText.value);
		}else{
			alert('oops,there is no todo where you want to change!')
		}
		changeTodoText.value = '';
		changeTodoIndex.value = '';
	},	
	deleteTodos: function(){
		var deleteTodoIndex = document.getElementById('deleteTodoNum');
		if(todoList.todos[deleteTodoIndex.value]){
			todoList.deleteTodos(deleteTodoIndex.valueAsNumber);	
		}else{
			alert('oops,there is no todo to delete there!')
		}
		deleteTodoIndex.value = '';
	},
	toggleCompleted:  function(){
		var toggleCompletedIndex = document.getElementById('toggleCompleted');
		if(todoList.todos[toggleCompletedIndex.value]){
			todoList.toggleCompleted(toggleCompletedIndex.valueAsNumber);	
		}else{
			alert('oops,there is no todo to mark as completed there!')
		}
		toggleCompletedIndex.value = '';
	}
}