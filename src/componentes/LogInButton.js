import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import './CartIcon.css';

function LogInButton(props) {

      return (
        <div>
            <NavLink to={`/login`} onClick={props.onClick} className="nav-link">Login
            </NavLink>
        </div>
      )
      
    }

  export default LogInButton;

  