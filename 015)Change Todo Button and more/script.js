var todoList =	{
		todos: [{
			todoText: "hello world",
			completed: false
		},{
			todoText: "hello world2",
			completed: false
		},{
			todoText: "hello world3",
			completed: false
		}],
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
	changeTodos: function(index, text){
		todoList.changeTodos(index, text);
		view.displayTodos();
	},	
	deleteTodos: function(position){
		todoList.deleteTodos(position);	
		view.displayTodos();
	},
	toggleCompleted: function(position){
		todoList.toggleCompleted(position);	
		view.displayTodos();
	}
}

var view = {
	displayTodos: function(){
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		todoList.todos.forEach(function(todo, position){
			var todoLi  = document.createElement('li');
			todoLi.className = 'todo-list'
			var todoTextWithCompleted = '';	
			if(todo.completed === true){
				todoTextWithCompleted = '(x) ' + todo.todoText;
			}else{
				todoTextWithCompleted = '( ) ' + todo.todoText;
			}		

			todoLi.id = position;
			todoLi.textContent = todoTextWithCompleted;
			todoLi.appendChild(this.createDeleteButton());
			todoLi.appendChild(this.createCompletedButton());
			todoLi.appendChild(this.createChangeButton());
			todosUl.appendChild(todoLi);
		}, this);
	},
	createDeleteButton: function(){
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	createCompletedButton: function(){
		var completedButton = document.createElement('button');
		completedButton.textContent = 'Completed';
		completedButton.className = 'completedButton';
		return completedButton;
	},	
	createChangeButton: function(){
		var changeButton = document.createElement('button');
		changeButton.textContent = 'Change';
		changeButton.className = 'changeButton';
		return changeButton;
	},
	setUpEventListeners: function(){		
		var todosUl = document.querySelector('ul');
		todosUl.addEventListener('click', function(event){
			var elementClicked = event.target;

			if(elementClicked.className == "deleteButton"){
				handlers.deleteTodos(parseInt(elementClicked.parentNode.id));
			}else if(elementClicked.className == "completedButton"){
				handlers.toggleCompleted(parseInt(elementClicked.parentNode.id));
			}else if(elementClicked.className == "changeButton"){
				var newText = prompt("You want to change that?");
				handlers.changeTodos(parseInt(elementClicked.parentNode.id), newText);
			}
		});
	}
}

view.setUpEventListeners();
view.displayTodos();
