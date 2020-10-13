import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {InfoContext} from '../context/infoContext';
import './NavBar.css';
import CartIcon from './CartIcon';
import logo from './imagenes/logoD.png';
import Category from './Category';
import LogOutButton from './LogOutButton';
import LogInButton from './LogInButton';


class NavBar extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
                <NavLink className="navbar-brand" to={`/`}><img src={logo}/></NavLink>
                
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Mi cuenta <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Mis compras</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Productos
                    </a>
                    
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    
                        <Category/>
                    
                    
                    </div>
                   
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Ayuda</a>
                </li>
                <li className="nav-item">
                    <LogInButton/>
                    <LogOutButton/>
                </li>

                </ul>
            </div>

           <CartIcon/>
           
        </nav>
      )
      
    }
  }
  export default NavBar;