import React from 'react';


class NavBar extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Deco I Need</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Mi cuenta <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Mis compras</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Productos
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Arte</a>
                    <a className="dropdown-item" href="#">Objetos</a>
                    <a className="dropdown-item" href="#">Muebles</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Ayuda</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Cerrar Sesión</a>
                </li>
                </ul>
            </div>
        </nav>
      )
      
    }
  }
  export default NavBar;