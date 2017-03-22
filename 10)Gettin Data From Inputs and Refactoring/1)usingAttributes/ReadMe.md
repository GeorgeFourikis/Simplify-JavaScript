Here we will do our first Refactoring.
=========================================================================

	Refactoring is the process of restructuring of existing functional code without changing the extrnal behaviour.


So why am i doing this here?
=========================================================================
	Right now i have this:
			//i am having access to the buttons now.
			var displayTodosButton = document.getElementById('displayTodosButton');
			var toggleAllButton    = document.getElementById('toggleAllButton');

			//now run the todoList.displayTodos();
			displayTodosButton.addEventListener('click', function(){
				todoList.displayTodos();
			})

			//now run the todoList.toggleAll();
			toggleAllButton.addEventListener('click', function(){
				todoList.toggleAll();
			})

			//in HTML
				<button id="displayTodosButton">Display Todos</button>
				<button id="toggleAllButton">Toggle All Todos</button>


			So i need to find a smarter way to add the event listeners and all the things i want to,simply because i need one event listener for each function i have inside my big Object.


So how am i able to do that?
=========================================================================
	in HTML
		<button onclick="todoList.displayTodos()">Display Todos</button>
		<button onclick="todoList.toggleAll()">Toggle All Todos</button>

	And that's all, feel free to delete the lines above that live inside the script.js and try it out.

Remember:
=========================================================================
	onclick="..."
	are HTML attributes that help us refactor our code and make it faster.