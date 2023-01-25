import React, { useEffect, useState, useContext } from "react";
import dig from "object-dig";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { AuthContext } from "../provider/AuthProvider";
import { signInWithGoogle } from "../service/firebase";
import * as Api from "../service/api";

const useStyle = makeStyles(() => ({
  root: {
    maxWidth: 360,
    margin: "auto",
  },
  ul: {
    paddingLeft: 0,
    listStyle: "none",
  },
  list: {
    justifyContent: "space-btween",
  },
}));

function ToDoList(props) {
  const classes = useStyle();
  const { fetch, todos } = props;

  const deleteHandle = async (id) => {
    await Api.todoDelete(id);
    fetch();
  };

  const checkHandle = async (id) => {
    await Api.toggleComplete(id);
    fetch();
  };

  const todoList = todos.map((todo) => (
    <ListItem key={todo.id}>
      <ListItemIcon>
        <Checkbox
          checked={todo.isComplete}
          onChange={() => checkHandle(todo.id)}
          name="checkedA"
        />
      </ListItemIcon>
      <ListItemText primary={todo.content} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => deleteHandle(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ));

  return (
    <div className={classes.root}>
      <h2>あなたのToDo</h2>
      <ul className={classes.ul}>{todoList}</ul>
    </div>
  );
}

export default ToDoList;
