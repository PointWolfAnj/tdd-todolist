/*
- Create a todo item that has an ID, text description, and starts off incomplete DONE
- Get all todo items DONE
- Set a todo completed by its ID
- Get only todo items that are incomplete
- Get only todo items that are complete
- Search and return a todo item by its ID, or return a message saying it doesn’t exist
- Remove a todo item by its ID
*/


class TodoList {

    constructor() {
        this.todoCounter = 1
        this.list = []
    }

    create(description) {

        const toDo = {
            id: this.todoCounter,
            text: description,
            status: 'incomplete'
        }
        this.todoCounter++
        this.list.push(toDo)
        return toDo
    }

    getAllTodo() {
        return this.list
    }

    setToDoComplete(id) {
        this.list[id - 1].status = 'complete'
        return this.list[id - 1]
    }
    getIncomplete() {
        const arr = []
        for (let i = 0; 1 < this.list.length; i++) {
            if (this.list[i]['status'] === 'incomplete') {
                arr.push(this.list[i])
            }
        }
        return arr
    }
}

module.exports = TodoList