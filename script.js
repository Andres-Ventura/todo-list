
let input = prompt("what would you like to do?") 
const todos = ['Collect Bees', 'second todo'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("********************")
        for (let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("********************");
    } else if (input === 'new') {
        const newTodo = prompt("ok whats new?");
        todos.push(newTodo);
        console.log (`${newTodo} added to the list`)
    }
    else if (input === 'delete') {
        const index = parseInt(prompt("delete what at what index?(must be a number)"));  
        while (Number.isNaN(index)) {
            index = prompt("invalid input type in a number for index.");
        }
        if (index !== todos.length) {
            console.log("not an index");
        }
        const deleted = todos.splice(index, 1)
        console.log(`Ok, deleted ${deleted[0]} for you. ;) `);
    }
    input = prompt("what would you like to do?") 
}
console.log("OK YOU QUIT");

