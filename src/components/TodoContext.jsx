import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {

  const [todoList, setTodoList] = useState([]);

  return (
    <TodoContext.Provider value={[todoList, setTodoList]}>
      {props.children}
    </TodoContext.Provider>
  )
};