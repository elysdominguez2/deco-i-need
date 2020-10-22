import React, { useContext } from 'react';
import { InfoContext } from '../context/infoContext';

import UserLogIn from './UserLogIn';
import UserLogOut from './UserLogOut';

function Login(props) {
    const infoContext = useContext(InfoContext);
    const userName = infoContext.userData.user;

    if (infoContext.isLogin) {
      return <UserLogIn userName={userName}/>;

    } else {
        return <UserLogOut/>; 
      }
  }
  
export default Login;
 