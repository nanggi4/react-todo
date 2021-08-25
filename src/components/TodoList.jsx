import React, { useEffect } from 'react';
import clsx from 'clsx';
import Todo from './Todo';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

const TodoList = (props) => {
  const classes = props.classes;

  const deleteTodo = (id) => {
    console.log('click', id);
  };

  useEffect(() => {
  }, []);

  return (
    <React.Fragment>
      <Paper elevation={3} className={clsx(classes.todoListWrap)}>
        <List>
          {props.todoList.map((todo, index) => (
            <Todo 
              key={index}
              todo={todo}
              deleteTodo={deleteTodo}
            />
          ))}              
        </List>
      </Paper>      
    </React.Fragment>
  )
};

const styles = {
  todoListWrap: {
    marginTop: '1rem'
  }
};

export default withStyles(styles)(TodoList);