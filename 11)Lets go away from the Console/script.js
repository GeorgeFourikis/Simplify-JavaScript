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
		view.displayTodos();
	},
	toggleAll: function(){
		todoList.toggleAll();
		view.displayTodos();
	},	
	addTodos: function(){
		var addTodoText = document.getElementById('addTodoText');
		if(addTodoText.value == ''){
			alert('oops,you are trying to add an empty Todo!');
		}else{
		todoList.addTodos(addTodoText.value);
		addTodoText.value = '';
		}
		view.displayTodos();

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
		view.displayTodos();
	},	
	deleteTodos: function(){
		var deleteTodoIndex = document.getElementById('deleteTodoNum');
		if(todoList.todos[deleteTodoIndex.value]){
			todoList.deleteTodos(deleteTodoIndex.valueAsNumber);	
		}else{
			alert('oops,there is no todo to delete there!')
		}
		deleteTodoIndex.value = '';
		view.displayTodos();
	},
	toggleCompleted:  function(){
		var toggleCompletedIndex = document.getElementById('toggleCompleted');
		if(todoList.todos[toggleCompletedIndex.value]){
			todoList.toggleCompleted(toggleCompletedIndex.valueAsNumber);	
		}else{
			alert('oops,there is no todo to mark as completed there!')
		}
		toggleCompletedIndex.value = '';
		view.displayTodos();
	}
}

var view = {
	displayTodos: function(){
		//This makes sure that after i add a new todo i will have
		//only the todos once and not all over again.
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		for(var i = 0; i < todoList.todos.length; i++){
			var todoLi  = document.createElement('li');
			var current =  todoList.todos[i];
			var todoTextWithCompleted = '';
			if(current.completed === true){
				todoTextWithCompleted = '(x) ' + current.todoText;
			}else{
				todoTextWithCompleted = '( ) ' + current.todoText;
			}


			//This is responsible for grabbing the value(text) and 
			//appending to the ul.
			todoLi.textContent = todoTextWithCompleted;
			todosUl.appendChild(todoLi);
		}
	}
}