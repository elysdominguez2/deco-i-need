import React, { useContext } from 'react';
import { InfoContext } from '../context/infoContext';

import LogOutButton from './LogOutButton';
import LogInButton from './LogInButton';
import Login from './Login';

import './estilos/LoginControl.css';

function LoginControl() {
    
    const infoContext = useContext(InfoContext);
    
    // const [isLogin, setIsLogin] = useState(false);

    const handleLoginClick = () => {
        // setIsLogin({isLoggedIn: true});
      };
    const handleLogoutClick =() => {
        // setIsLogin({isLoggedIn: false});
        infoContext.setIsLogin(false);
      }
    
 
    // const isLoggedIn = () => {
    //     let button;
    let button;
      if (infoContext.isLogin) {
        button = <LogOutButton logOut={handleLogoutClick} />;
      }else{
        button = <LogInButton onClick={handleLoginClick} />;
    }
    return (
      <div className="saludo">
        {button} 
        <Login/>
        
      </div>
    );
      
      
//   }

  
  };



export default LoginControl;

