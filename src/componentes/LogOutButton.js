import React from 'react';
import {NavLink} from 'react-router-dom';

function LogOutButton(props) {

    return (
        <div>
            <NavLink to={`/`} onClick={props.logOut} className="nav-link">Cerrar Sesión</NavLink>
        </div>
      )
  }
export default LogOutButton;
  