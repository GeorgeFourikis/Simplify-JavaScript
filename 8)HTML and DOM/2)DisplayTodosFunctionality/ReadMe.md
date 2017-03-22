What we need to do here:
==============================================================

	Now, we have our buttons waiting for making them Functional.The steps are simple: 
		-->Get access to the display todos button
		-->Run Display todos method when someone clicks the above button


Notice:
==============================================================
	Instead of having my Script element in the Head section as i should,i moved it in th end of the Body.The reason is that having my script element loading in the Head means that it will run before the Body is ran by the Browser,so the buttons will not get accepted by the Browser.


So what have we done here?
==============================================================
	The steps to make it possible to connect your Html with your JavaScript:
		1)We made a new variable called "displayTodosButton",we assigned it the button we wanted using the "document.getElementById('...')".

		2)We attached to it an event listener,which after we give the event we want as a first argument('click'), then we give it the anonymous function we want to run,which inside has our function itself that displasys the Todos.