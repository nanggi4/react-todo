import React, { useContext, useEffect } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { TodoContext } from './TodoContext';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = (props) => {
  const classes = props.classes;
  const [todoList, setTodoList] = useContext(TodoContext);

  useEffect(() => {
    console.log(todoList);
  }, [])

  return (
    <React.Fragment>
      <Paper elevation={3} className={clsx(classes.todoListWrap)}>
        <List>
          {todoList.map((todo, index) => (
            <ListItem>
              <ListItemText
                primary={todo.todo}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
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