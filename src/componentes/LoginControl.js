import React, { useContext } from 'react';
import { InfoContext } from '../context/infoContext';
import { CartContext } from '../context/cartContext';

import LogOutButton from './LogOutButton';
import LogInButton from './LogInButton';
import Login from './Login';

import './estilos/LoginControl.css';

function LoginControl() {
    
    const infoContext = useContext(InfoContext);
    const [agregarCarrito, cart, resetCarrito] = useContext(CartContext);
    
    const handleLoginClick = () => {

      };
    const handleLogoutClick =() => {
        infoContext.setIsLogin(false);
        infoContext.setMyPurchase(undefined);
        resetCarrito();
      }
    
    let button;
      if (infoContext.isLogin) {
          button = <LogOutButton logOut={handleLogoutClick}/>;
        }else{
            button = <LogInButton onClick={handleLoginClick}/>;
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

