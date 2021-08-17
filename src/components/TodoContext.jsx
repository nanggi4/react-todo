import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {

  const [todoList, setTodoList] = useState([]);

  return (
    <TodoProvider.Provider value={[todoList, setTodoList]}>
      {props.children}
    </TodoProvider.Provider>
  )
};