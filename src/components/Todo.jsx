import React, { useContext, useState, useRef } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = (props) => {
  const classes = props.classes;

  return (
    <ListItem>
      <ListItemText
        primary={props.todo}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={(e) => props.deleteTodo(props.todo)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const styles = {
};

export default withStyles(styles)(Todo);