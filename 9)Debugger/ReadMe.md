What is the debugger?
==========================================================================

	Debugger is a very important tool that we are given by Chrome.We are able to spot mistakes by using it and most important of all,we are able to see our application running step by step and spot the functionalities or the errors.So as you can understand,when you can use debugger do it, because it helps troubleshooting and makes it faster. 


How can i use it?
==========================================================================
	Go to the script.js file in the folder.
	<code>
	displayTodos: function(){
			debugger;   //here is the debugger
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
		}
	</code>


==========================================================================

Try it out:
==========================================================================

	Go and run your whole script in your Chrome console.You will see that if you run any other function of the todoList nothing will happen and all will run as usual.But if you call todolist.displayTodos() then the debugger makes the function run step by step by pausing it after each step is completed.A good practice here is to intentionally create errors in your code and run it with a debugger to see how you will be able to understand it and fix it.
