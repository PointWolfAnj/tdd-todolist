const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })
  it("creates a todo item", () => {
    // set up
    const expected = {
      id: 1,
      text: 'Take the pizza out of the packaging',
      status: 'incomplete'
    }
    // execute
    const result = todoList.create('Take the pizza out of the packaging')
    // verify
    expect(result).toEqual(expected)
  })
  it("Get all todo items", () => {
    // set up
    const one = {
      id: 1,
      text: 'Place in the microwave',
      status: 'incomplete'
    }
    const two = {
      id: 2,
      text: 'Heat up the pizza for 5 minutes',
      status: 'incomplete'
    }
    // execute
    todoList.create('Place in the microwave')
    todoList.create('Heat up the pizza for 5 minutes')
    const expected = [one, two]
    const result = todoList.getAllTodo()
    // verify
    expect(result).toEqual(expected)
  })
  it("Set a todo completed by its ID", () => {
    // set up
    const expected = {
      id: 1,
      text: 'Take the pizza out of the microwave',
      status: 'complete'
    }
    // execute
    todoList.create('Take the pizza out of the microwave')
    const result = todoList.setToDoComplete(1)
    // verify
    expect(result).toEqual(expected)
  })
  it('Get all todo items', () => {
    // set up
    const one = {
      id: 1,
      text: 'Eat your pizza',
      status: 'complete'
    }
    const two = {
      id: 2,
      text: 'Heat up the pizza for 5 minutes',
      status: 'incomplete'
    }
    const three = {
      id: 2,
      text: 'Clean your plate',
      status: 'incomplete'
    }
    // execute
    todoList.create('Eat your pizza')
    todoList.create('Heat up the pizza for 5 minutes')
    todoList.create('Clean your plate')
    const expected = [two, three]
    todoList.setToDoComplete(1)
    const result = todoList.getIncomplete()
    // verify
    expect(result).toEqual(expected)
  })
})