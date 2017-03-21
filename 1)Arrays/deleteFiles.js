//Now, we know how to save an array,we know how to add items to this
//array and how to change an item that we want.
//Let's see how we are able to delete an item.

var todos = ['newItem1', 'item2', 'item3'];

//I can delete an item using the splice.
//It works like that:

todos.splice(0, 1);
//That means "start splicing from position 0" and "splice 1 item".
console.log(todos) // ['item2', 'item3']

