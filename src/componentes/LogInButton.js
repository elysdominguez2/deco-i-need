import React from 'react';
import {NavLink} from 'react-router-dom';

function LogInButton(props) {

      return (
        <div>
            <NavLink to={`/login`} className="nav-link">Login</NavLink>
        </div>
      )  
  }
export default LogInButton;

  