import React, { useState, useEffect, useContext } from "react";
import dig from "object-dig";
import { TextField, Button, makeStyles } from "@material-ui/core";
import { signInWithGoogle } from "../service/firebase";
import { AuthContext } from "../provider/AuthProvider";
import * as Api from "../service/api";
import ToDoList from "./ToDoList";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    marginTop: 40,
  },
  form: {
    width: "100%",
    MaxWidth: 360,
    margin: "auto",
    marginBottom: 40,
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },
  input: {
    marginRight: "10px",
  },
}));

function Dashboard() {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const [inputName, setInputName] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Todo一覧を取得
    // 1. useEffectの第二引数が定義されてると、最初のrender時と引数の値が変更された時発火する。
    fetch();
  }, [currentUser]);

  const fetch = async () => {
    // 2. currentUserがログインして値があったらApiモジュールのinitGetが発火
    if (dig(currentUser, "uid")) {
      // 3. uidをもとにfirestoreに問い合わせをして、data変数に代入してデータ更新
      const data = await Api.initGet(currentUser.uid);
      await setTodos(data);
    }
  };

  const formRender = () => {
    let dom;
    if (dig(currentUser, "uid")) {
      dom = (
        <form className={classes.form}>
          <TextField
            placeholder="ToDoName"
            value={inputName}
            className={classes.input}
            onChange={(event) => setInputName(event.currentTarget.value)}
          />
          <Button
            disabled={!(inputName.length > 0)}
            variant="contained"
            color="primary"
            size="small"
            type="button"
            onClick={() => poost()}
          >
            追加
          </Button>
        </form>
      );
    } else {
      dom = (
        <button type="button" onClick={signInWithGoogle}>
          ログイン
        </button>
      );
    }

    return dom;
  };

  const poost = async () => {
    await Api.addTodo(inputName, currentUser.uid);
    await setInputName("");
    fetch();
  };

  return (
    <div className={classes.root}>
      {formRender()}
      <ToDoList todos={todos} fetch={fetch} />
    </div>
  );
}

export default Dashboard;
