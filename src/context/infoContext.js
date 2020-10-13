import React, {useState} from 'react';

export const InfoContext = React.createContext([]);

export const InfoProvider = (props) =>{
    const [userData, setUserData] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    // crear estado con una variable boolean para saber si el usuario está logueado

    // Inicializo user data
    // setUserData({name:'aaa',user: 'eee',email: 'e@gmail.com', pass: 'qwer',tel: '11223'});
    
    const miContexto = {
        userData: userData,
        setUserData: setUserData,
        // poner aca una variable boolean para saber si el usuario está logueado
        isLogin: isLogin,
        setIsLogin: setIsLogin,
        orders:[],
        test: "hola test"
    };

    return(
        <InfoContext.Provider value={miContexto}>
            {props.children}
        </InfoContext.Provider>
    )
}