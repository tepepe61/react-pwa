import React, {useState, useEffect, useContext} from 'react';
import { signInWithGoogle } from '../service/firebase';
import dig from 'object-dig';
import {AuthContext} from "../provider/AuthProvider";
import * as Api from '../service/api'

const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState("");
  // console.log(inputName);

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

  const poost = () => {
    Api.addTodo(inputName, currentUser.currentUser.uid);
    setInputName("");
  }

  return(
    <div>
      {formRender()}
    </div>
  )
};

export default Dashboard;