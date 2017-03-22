Now i need to create a handler and tae all the functions from there when i call them.
===========================================================================


	var handlers ={
		displayTodos: function(){
			todoList.displayTodos();
		},
		toggleAll:   function(){
			todoList.toggleAll();
		},
		.....,
		.....
	}

	The reason i am doing this is because i need an entire Object to be responsible just for the function calls.