import React, {useState} from 'react';

export const InfoContext = React.createContext([]);

export const InfoProvider = (props) =>{
    const [userData, setUserData] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    
    const miContexto = {
        userData: userData,
        setUserData: setUserData,
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