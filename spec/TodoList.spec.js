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
    const expected = [{
      id: 1,
      text: 'Take the pizza out of the packaging',
      status: 'incomplete'
    },
    {
      id: 2,
      text: 'Heat up the pizza for 5 minutes',
      status: 'incomplete'
    }]
    // execute
    todoList.create('Take the pizza out of the packaging')
    todoList.create('Heat up the pizza for 5 minutes')
    const result = todoList.getAllTodo()
    // verify
    expect(result).toEqual(expected)
  })
  it('Set a todo completed by its ID', () => {
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
    const expected = [{
      id: 2,
      text: 'Heat up the pizza for 5 minutes',
      status: 'incomplete'
    },
    {
      id: 3,
      text: 'Clean your plate',
      status: 'incomplete'
    }]
    // execute
    todoList.create('Eat your pizza')
    todoList.create('Heat up the pizza for 5 minutes')
    todoList.create('Clean your plate')
    todoList.setToDoComplete(1)
    const result = todoList.getIncomplete()
    // verify
    expect(result).toEqual(expected)
  })
  it('Get all todo items', () => {
    // set up
    const expected = [{
      id: 1,
      text: 'Take the pizza out of the microwave',
      status: 'complete'
    }]
    // execute
    todoList.create('Take the pizza out of the microwave')
    todoList.create('Heat up the pizza for 5 minutes')
    todoList.create('Clean your plate')
    todoList.setToDoComplete(1)
    const result = todoList.getcomplete()
    // verify
    expect(result).toEqual(expected)
  })
  it('Search and return a todo item by its ID', () => {
    // set up
    const expected = {
      id: 3,
      text: 'Clean your plate',
      status: 'incomplete'
    }
    // execute
    todoList.create('Take the pizza out of the microwave')
    todoList.create('Heat up the pizza for 5 minutes')
    todoList.create('Clean your plate')
    const result = todoList.searchItem(3)
    // verify
    expect(result).toEqual(expected)
  })
  it('return a message saying it does not exist', () => {
    // set up
    const expected = 'N/A'

    // execute
    todoList.create('Take the pizza out of the microwave')
    todoList.create('Heat up the pizza for 5 minutes')
    todoList.create('Clean your plate')
    const result = todoList.searchItem(4)
    // verify
    expect(result).toEqual(expected)
  })
  it('Remove a todo item by its ID', () => {
    // set up
    const expected = [
    ]
    // execute
    todoList.create('Take the pizza out of the packaging')
    const result = todoList.removeItem(1)
    // verify
    expect(result).toEqual(expected)
  })
})