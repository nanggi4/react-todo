import React, { useContext, useState, useRef } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const TodoInput = (props) => {
  const classes = props.classes;
  const todoInputWrap = useRef();

  const handleInput = (e) => {
    props.setTodoInput(e.target.value);
    todoInputWrap.current.focus();
  }

  return (
    <React.Fragment>
      <TextField
        id="todo Input"
        label="todo input"
        placeholder="Insert your Todo !"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        ref={todoInputWrap}
        className={clsx(classes.todoInput)}
        onChange={e => handleInput(e)}
      />
      <Button 
        className={clsx(classes.todoAddBtn)} 
        variant="contained" 
        size="small" 
        color="primary" 
        fullWidth
        onClick={props.onClick}
      >
        Add
      </Button>      
    </React.Fragment>
  )
};

const styles = {
  todoAddBtn: {
    margin: '1rem 0 0'
  }
};

export default withStyles(styles)(TodoInput);