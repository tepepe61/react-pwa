import React, {useContext, useState} from "react";
import {signInWithGoogle} from "../service/firebase";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  // useContextはReact.createContext();で生成したstateを引数でもらって使えるようにしてる。
  const currentUser = useContext(AuthContext);
  console.log(currentUser)
  return(
    <header>
      ヘッダー
      <button onClick={signInWithGoogle} >ログイン</button>
    </header>
  )
}

export default Header;