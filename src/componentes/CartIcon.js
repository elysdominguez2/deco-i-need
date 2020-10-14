import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import './CartIcon.css';
import {CartContext} from '../context/cartContext';

function CartIcon(props) {

  const [agregarCarrito, cart] =useContext(CartContext);

  let newTotalCount=0;
    for (const productId in cart) {
      const [name, price, count] = cart[productId];
      newTotalCount = newTotalCount + count;
    }

      return (
        <div>
            <NavLink to={`/cart`} className="nav-link"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
            </NavLink>
            <span>{newTotalCount}</span>

            

            <NavLink to={`/favs`} className="nav-link"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </NavLink>
        </div>
      )
      
    }

  export default CartIcon;

  