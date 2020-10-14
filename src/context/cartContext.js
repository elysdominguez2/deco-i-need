import React, {useState} from 'react';

const CartContext = React.createContext([]);

const CartProvider = (props) =>{
    const [cart, setCart] = useState({});

    const agregarCarrito = (id, name, price, count) => {

        console.log('agregando '+ count+ ' ' + id + ' al carrito');

        console.log('info previa en el carrito');
        for (const productId in cart) {
            console.log(`${productId}: ${cart[productId]}`);
        }


        let obj = {};
        obj[id] = [name, price, count];

        console.log('info nueva para el carrito');
        for (const productId in obj) {
            console.log(`${productId}: ${obj[productId]}`);
        }

        setCart(prevCart => ({
            ...prevCart,
            [id]: [name, price, count]
        }));

    };

    return(
        <CartContext.Provider value={[agregarCarrito, cart]}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };