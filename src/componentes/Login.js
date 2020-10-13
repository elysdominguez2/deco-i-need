import React from 'react';

import './ItemList.css';
import UserLogIn from './UserLogIn';
import UserLogOut from './UserLogOut';



function Login(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserLogIn/>;

    }
    return <UserLogOut/>;
  }
  

  export default Login;
 