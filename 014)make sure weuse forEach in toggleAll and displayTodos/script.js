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

			this.todos.forEach(function(todo){
				if(todo.completed === true){
					completedTodos++;
				}
			});

			// if(completedTodos == totalTodos){
			// 	this.todos.forEach(function(todo){
			// 		todo.completed = false;
			// 	});
			// }else{
			// 	this.todos.forEach(function(todo){
			// 		todo.completed = true;
			// 	})
			// }
			//lets make it even smarter and better.
			this.todos.forEach(function(todo){
				if(completedTodos === totalTodos){
					todo.completed = false;
				}else{
					todo.completed = true;
				}
			});
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
	deleteTodos: function(position){
		todoList.deleteTodos(position);	
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
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		todoList.todos.forEach(function(todo, position){
			var todoLi  = document.createElement('li');
			var todoTextWithCompleted = '';	
			if(todo.completed === true){
				todoTextWithCompleted = '(x) ' + todo.todoText;
			}else{
				todoTextWithCompleted = '( ) ' + todo.todoText;
			}		

			todoLi.id = position;
			todoLi.textContent = todoTextWithCompleted;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
			//the reason i am adding `this` after the callback is 
			//because the forEach can be used like that: 
			// list.forEach(callback, this). 
			//In that case `this` refers to the state it was refering
			//just before the forEach occured.
		}, this);
	},
	createDeleteButton: function(){
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setUpEventListeners: function(){		
		var todosUl = document.querySelector('ul');
		todosUl.addEventListener('click', function(event){
			var elementClicked = event.target;

			if(elementClicked.className == "deleteButton"){
				handlers.deleteTodos(parseInt(elementClicked.parentNode.id));
			}
		});
	}
}

view.setUpEventListeners();
