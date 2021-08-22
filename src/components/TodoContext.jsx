import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      todo: "todo1",
      data: "2021-08-27",
      complete: false
    },
    {
      id: 2,
      todo: "todo2",
      data: "2021-08-28",
      complete: false
    },
    {
      id: 3,
      todo: "todo3",
      data: "2021-08-28",
      complete: true
    },        
  ]);

  return (
    <TodoContext.Provider value={[todoList, setTodoList]}>
      {props.children}
    </TodoContext.Provider>
  )
};