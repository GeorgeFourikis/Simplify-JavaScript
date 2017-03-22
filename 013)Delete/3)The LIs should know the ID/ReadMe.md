What do we try to achieve here?
=====================================================================
	Here we need to give a very important functionality.Right now,in order to delete a Todo i need to give the index and then the Todo will get deleted.But keep in mind that when you are building an application,you want anyone to use it and you want it plain simple and in the same time functional.So we need to refactor.

	We need to give each Todo a specific ID and this ID should get called each time we want to delete the Todo and by passing that as an argument we want the delete function to work.

=====================================================================
	After you are able to see the code we used, now here are some things that you should carry before you move on.
	So the pattern we used here by applying a new key inside the object views `setUpEventListeners` is called "Event Delegation". It is the process of using `event` propagation(bubbling) to handle events at a higher level in the DOM than the element on which the event originated-happened.

	To make it straight.
	1)We have a listener on the element that includes the li and the button.
	2)We make sure that the event took place inside the borders of our button
	3)Last, we use the `parentNode` which points to the li and we grab the `id`.
	That is how we were able to pass the id (after we made sure it is going to be a number [parseInt()]) in the delete method we have created before.