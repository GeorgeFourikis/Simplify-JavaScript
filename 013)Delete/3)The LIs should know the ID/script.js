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
	//i changed that in order to work in our new way
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
		for(var i = 0; i < todoList.todos.length; i++){
			var todoLi  = document.createElement('li');
			var current =  todoList.todos[i];
			var todoTextWithCompleted = '';
			if(current.completed === true){
				todoTextWithCompleted = '(x) ' + current.todoText;
			}else{
				todoTextWithCompleted = '( ) ' + current.todoText;
			}

			//i am initiating the id of the todoLi
			todoLi.id = i
			todoLi.textContent = todoTextWithCompleted;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
		}
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
			//get the element that was clicked.
			var elementClicked = event.target;

			//check if elementClicked is a delete button
			if(elementClicked.className == "deleteButton"){
				//make handlers.deleteTodos(position) run
				handlers.deleteTodos(parseInt(elementClicked.parentNode.id));
			}
		});
	}
}

//remember i need to have this here in order to be able to listen
//for events at any given time.
view.setUpEventListeners();
