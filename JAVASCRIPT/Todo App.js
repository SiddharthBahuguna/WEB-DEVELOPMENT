let todo = [];

while (true) {
    let req = prompt("Please enter your request");

    if (req === "quit") {
        console.log("Quitting app");
        break;
    }

    if (req === "list") {
        console.log("-----------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i + ". " + todo[i]);
        }
        console.log("-----------");
    } else if (req === "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    } 
    else if (req === "delete") {
        let idx = prompt("Please enter the task index");
        if (idx >= 0 && idx < todo.length) {
            todo.splice(idx, 1);
            console.log("Task deleted");
        } else {
            console.log("Invalid task index");
        }
    } else {
        console.log("Wrong request");
    }
}
