var todos = ['item1', 'item2', 'item3'];


// now,if i want to access a specific item of my list this is the way.
console.log(todos[0]) // item1
console.log(todos[1]) // item2
console.log(todos[2]) // item3

//REMEMBER: The Computers start counting from 0,hence my item1
// can be accessed from index 0 and not 1.

//Now how can i change a specific item?
todos[0] = 'newItem1';
//After i use index 0 of the todos array, i assign to it the new 
//item.
console.log(todos) //['newItem1', 'item2', 'item3']