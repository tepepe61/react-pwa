import React, {useContext, useState} from "react";
import dig from 'object-dig';
import {signInWithGoogle, logOut} from "../service/firebase";
import { AuthContext } from "../provider/AuthProvider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  toolbar: {
    justifyContent: 'space-between'
  },
  button: {
    color: "#FFF"
  }
}));

const Header = () => {
  // useContextはReact.createContext();で生成したstateを引数でもらって使えるようにしてる。
  const currentUser = useContext(AuthContext);
  const classes = useStyles();

  const buttonRender = () => {
    let buttonDom

    if(dig(currentUser, 'currentUser', 'uid')){
      buttonDom = <Button className={classes.button} variant='inherit' onClick={logOut} >ログアウト</Button>
    }else{
      buttonDom = <Button className={classes.button} variant='inherit' onClick={signInWithGoogle} >ログイン</Button>
    }
    return buttonDom
  }

  return(
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">
          ReactToDo
        </Typography>
        {buttonRender()}
      </Toolbar>
    </AppBar>
  )
}

export default Header;