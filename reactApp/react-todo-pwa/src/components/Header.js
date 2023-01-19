import React, {useContext, useState} from "react";
import dig from 'object-dig';
import {signInWithGoogle, logOut} from "../service/firebase";
import { AuthContext } from "../provider/AuthProvider";


const Header = () => {
  // useContextはReact.createContext();で生成したstateを引数でもらって使えるようにしてる。
  const currentUser = useContext(AuthContext);
  console.log(currentUser)

  const buttonRender = () => {
    let buttonDom
    if(dig(currentUser, 'currentUser', 'uid')){
      buttonDom = <button onClick={logOut} >ログアウト</button>
    }else{
      buttonDom = <button onClick={signInWithGoogle} >ログイン</button>
    }
    return buttonDom
  }

  return(
    <header>
      へっだー
      { buttonRender() }
    </header>
  )
}

export default Header;