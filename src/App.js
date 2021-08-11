import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Paper, Box }  from '@material-ui/core';
import TodoInput from './components/TodoInput';

const App = (props) => {
  const classes = props.classes;

  const onClick = () => {
    console.log('click !');
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Box component="div" className={clsx(classes.todoBackground)}>
        <Container maxWidth="sm" className={clsx(classes.todoContainer)}>
          <h1 className={clsx(classes.todoMainTitle)}>Todo App</h1>
          <Paper elevation={3} className={clsx(classes.todoWrap)}>
            <TodoInput onClick={onClick}/>
          </Paper>
        </Container>      
      </Box>      
    </React.Fragment>
  );
}

const styles = {
  todoBackground: {
    backgroundColor: '#6ecd56',
    backgroundImage: 'linear-gradient(142deg, #bdcd56, #96cd56 31%, #6ecd56 65%, #56cd66)',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  todoMainTitle: {
    margin: '0 0 1rem'
  },
  todoWrap: {
    padding: 30
  }
};

export default withStyles(styles)(App);
