import React, { useState } from 'react';
import './App.css';

let index = 0;

const createTodo = text => ({
  text,
  id: index++,
});

const initialState = [
  createTodo('foo'),
];

const useTodo = () => {
  const [todos, setTodos] = useState(initialState);
  const addTodo = text => {
    setTodos(todos => [
      ...todos,
      createTodo(text),
    ]);
  };
  return {
    todos,
    addTodo,
  };
};

export const App = props => {
  const { todos, addTodo } = useTodo();
  const [newTodoText, setNewTodoText] = useState('');
  return (
    <div>
      {todos.map(todo => (
        <div
          key={todo.id}
          style={{
            borderBottom: '1px solid black',
          }}>
          {todo.text}
        </div>
      ))}
      <input
        value={newTodoText}
        onChange={e => setNewTodoText(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            addTodo(e.target.value);
            setNewTodoText('');
          }
        }} />
    </div>
  );
};
