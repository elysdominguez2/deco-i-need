import React from 'react';
import {NavLink} from 'react-router-dom';

import CartIcon from './CartIcon';
import logo from './imagenes/logoD.png';
import Category from './Category';
import LoginControl from './LoginControl';

import './estilos/NavBar.css';

class NavBar extends React.Component {
        render() {
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    
                    <NavLink className="navbar-brand" to={`/`}><img src={logo} alt="logo"/></NavLink>
                        
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                < NavLink to = {`/miscompras`} className = "nav-link" > Mis compras </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Productos
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Category/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <LoginControl/>
                    <CartIcon/>
                </nav>
            )
        
        }
    }
export default NavBar;