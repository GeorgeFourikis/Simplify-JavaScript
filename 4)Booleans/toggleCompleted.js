var todoList =	{
		todos: [],
		displayTodos: function(){
			console.log('My todos are: ' , this.todos);
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

//In order to be able to toggle my property as completed i need to be
//able to change the false state to true.the way to be done using JS is
//to use the `Bang Operator`--> ! .

//!false = true
//var hi = false
// hi // false
// !hi //true

//So what i am doing here in the method i created, is that after i am 
//accessing the specific position's propert and then i am saving to a variable
//i am using dot notation to be able to have the value of it(in this case)
//false,and then i am applaying to it the bang operator followed by the
//value,so what was false will be true and vice versa.
