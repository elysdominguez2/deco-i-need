import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import './CartIcon.css';

function LogOutButton(props) {

      return (
        <div>
            <button onClick={props.onClick} className="nav-link">Cerrar Sesión
            </button>
        </div>
      )
      
    }

  export default LogOutButton;

  
  
  