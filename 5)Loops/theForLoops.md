So how am i able to make the computer make repeated calculations or actions?
With loops.Lets make the machine tell us hi 5 times.

for(var i = 0; i < 5; i++){
	console.log('hi George');
}

Lets break down the code.
var i = 0 INITIALIZATION--> 
Starting point of our loop

i < 5 CONDITION--> 
Every time the loop finishes comes back to this statement in order to compare with the value in the particular moment,if the statement returns true,the loop breaks.

i++ FINAL EXPRESSION--> 
This statement is the same as i = i + 1  or i += 1,it means that after it checks if the i < 5 is false it adds 1 to i and gets in the loop to do what we ask it for.
So in this example the mahine will execute this loop from 0 to 4, 5 times.

Wrap up.

for(INITIALIZATION, CONDITION, FINAL_EXPRESSION){
	//code goes here
}

========================================================================
Ok,now we know the basics of a for loop but what can we do in order to use it on an array to access all the elements?Especially if we dont know the number of the elements?

var arr = [34, 67, true, false, 'hi', 'bye'];
for(var i = 0; i < arr.length; i++){
	console.log(arr[i]);
}

Notice: in the condition,i used arr.length.In this case arr.length will be equal to 6,so the very moment the i will be 6 the loop will be terminated.We are alright with that since we already know that an array has a starting point of 0,so in reality all our elements are include within 0 to 5.
