import React, { useState } from 'react';
import { TodosAtom } from '../TodoStore';
import { useAtom } from 'jotai';

const Todo = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useAtom(TodosAtom);

  const handleAdd = () => {
    if (value.trim() !== '') {
      setTodos(prevTodos => [
        ...prevTodos,
        {
          id: Date.now(),
          text: value
        },
      ]);
      setValue('');
    }
  };

  const handleDelete = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input
        placeholder="New todo"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
