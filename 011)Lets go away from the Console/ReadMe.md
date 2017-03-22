So until now:
================================================================================
	We made possible to use the DOM and manipulate buttons and inputs in order to make our Javascript Functions work.Now we need to see how we are able to append things inside the DOM because until now we are still waiting the Console to tell us things about our oututs. 

Keep in mind:
================================================================================
	Here we need to use li elements to show the todos.li elements are list items.There are 3 types of lists but we will focus on 2 of them.

	1)Unordered Lists
	=================
		<ul>
			<li>hello</li>
			<li>there</li>
			<li>friend</li>
		</ul>

	2)Ordered Lists
	===============
		<ol>
			<li>hello</li>
			<li>there</li>
			<li>friend</li>
		</ol>

	3)Detailed Lists
	================
		<DL>
			<DT><STRONG>Lower cost</STRONG>
			<DD>The new version of this product costs significantly less than the
			previous one!
			<DT><STRONG>Easier to use</STRONG>
			<DD>We've changed the product so that it's much easier to use!
			<DT><STRONG>Safe for kids</STRONG>
			<DD>You can leave your kids alone in a room with this product and
			they won't get hurt (not a guarantee).
		</DL>

		Keep in mind that most of the times you will nee to use OL and UL,but for now give all those a shot and see how they are used inside a page.

Now all those are fine but we still need a way to dynamically add new elements in our website.
================================================================================
	Go to your console after you open your html page.Try this in your console

	var newLi = document.createElement('li');

	-->now call newLi in the console and you will see that the new element was created.

	Next,after you are certain that your Html page has already a ul element do the following.

	var list = document.querySelector('ul');
	//here we save a variable the ul element.

	list.append(newLi);  or
	list.appendChild(newLi);

	==>Now,go check the Html page.We can see that we have a bulleted item inside of our Html page.





	Notice:Inside our handler,after we completed the rest that has to do with the newly created view object.Now in the end of all anonymous functions that run inside the handlers,we added view.displayTodos(), which helps us
	see the changes live without the need of the console.