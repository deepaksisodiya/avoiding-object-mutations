/**
 * Created by deepaksisodiya on 11/12/15.
 */

var expect = require('expect');
var deepFreeze = require('deep-freeze');

const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  deepFreeze(todoBefore);
  const todoAfter = {
    id: 0,
    text: "Learn Redux",
    completed: true
  };
  expect(toggleTodo(todoBefore))
    .toEqual(todoAfter);
};

testToggleTodo();

console.log('Test Passed');