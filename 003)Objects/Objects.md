In JavaScript we use Objects to group related Data and Functions together.

example: 
	var freshStart = {
						academy: "Elium",
						city: "Brussels",
						country: Belgium(),
						isAwesome: true
					}

1)Each of those lines i can see there are called Properties and they are separated with commas (,).
2)Within each property there is a specific format.For example, 'academy' property has as a value 'Elium'.


//Go to your Google Console and assign an Object to a variable.
//Then call the object like so.

var obj = {hi: 'there', bye: 'bye', 4: 'oops'};

obj; // Object {4: "oops", hi: "there", bye: "bye"}

//That is what the console should show me uppon calling my variable.

//=========================================================
Now lets see how we can access the values of our object.

a) obj.hi; // 'there'
b) obj[4]; // 'oops'

//=========================================================
OBJECTS AND FUNCTIONS
//=========================================================


	var newObj = {
		name: 'George',
		sayMyName: function(){
			console.log(this.name)
		}
	}

Before we see exactly what is happening with the object and the function,lets focus on the keyword `this` that we used.Javascript gives us 'this' keyword.When i use `this` inside of a function that is inside an Object,`this` then refers to the Object.

//console
newObj.sayMyName(); // George

//So the funtion runs, this.name inside the console.log of our function //means that the function should find the name that is related with the //Object newObj,so this.name == newObj.name.