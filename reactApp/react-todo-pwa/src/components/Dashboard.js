import React, {useState, useEffect, useContext} from 'react';
import { signInWithGoogle } from '../service/firebase';
import dig from 'object-dig';
import {AuthContext} from "../provider/AuthProvider";
import * as Api from '../service/api';
import ToDoList from './ToDoList';

const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todos);

  useEffect(() => {
  // Todo一覧を取得
  // 1. useEffectの第二引数が定義されてると、最初のrender時と引数の値が変更された時発火する。
  fetch();
  }, [currentUser])

  const fetch = async() => {
    // 2. currentUserがログインして値があったらApiモジュールのinitGetが発火
    if( dig(currentUser, 'currentUser', 'uid')){
      // 3. uidをもとにfirestoreに問い合わせをして、data変数に代入してデータ更新
      const data = await Api.initGet(currentUser.currentUser.uid)
      await setTodos(data);
    }
  }

  const formRender = () => {
    let dom
    if(dig(currentUser, 'currentUser', 'uid')){
      dom =
        <form>
          <input placeholder="ToDoName" value={inputName} onChange={(event) => setInputName(event.currentTarget.value)} />
          <button type='button' onClick={() => poost()}>追加</button>
        </form>
    }else{
      dom = <button onClick={signInWithGoogle}>ログイン</button>
    }

    return dom
  }

  const poost = async() => {
    await Api.addTodo(inputName, currentUser.currentUser.uid);
    await setInputName("");
    fetch();
  }

  return(
    <div>
      {formRender()}
      <ToDoList todos={todos} fetch={fetch} />
    </div>
  )
};

export default Dashboard;