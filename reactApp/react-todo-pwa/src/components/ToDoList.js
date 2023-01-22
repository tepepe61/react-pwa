import React, {useEffect, useState, useContext} from 'react';
import * as Api from "../service/api";
import { signInWithGoogle } from '../service/firebase';
import dig from 'object-dig';
import { AuthContext } from '../provider/AuthProvider';
import {ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton, Checkbox} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core';


const useStyle = makeStyles(() => ({
  root: {
    maxWidth: 360,
    margin: 'auto',
  },
  ul: {
    paddingLeft: 0,
    listStyle: 'none',
  },
  list: {
    justifyContent: 'space-btween'
  }
}));

const ToDoList = (props) =>{
  const classes = useStyle();
  const deleteHandle = async(id) => {
    await Api.todoDelete(id);
    props.fetch();
  }

  const todoList = props.todos.map((todo) => {
    return (
      <ListItem key={todo.id}>
        <ListItemIcon>
          <Checkbox name="checkedA" />
        </ListItemIcon>
        <ListItemText primary={todo.content} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => deleteHandle(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  return(
    <div className={classes.root}>
      <h2>あなたのToDo</h2>
      <ul className={classes.ul}>{todoList}</ul>
    </div>
  )
}

export default ToDoList;