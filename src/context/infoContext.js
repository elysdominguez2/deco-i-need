import React, {useState} from 'react';
import { getFirestore } from '../firebase/index.js'

export const InfoContext = React.createContext([]);

export const InfoProvider = (props) =>{
    const [userData, setUserData] = useState({});
    const [isLogin, setIsLogin] = useState(false);

    const saveUserData = (data) => {
    
        const db = getFirestore();

        const usuarios = db.collection("usuarios");

        usuarios.add(data)
        .then(({ id }) => {
            //setUsuarioId(id);
            console.log("Este usuario esta logueado " + id);
            alert("Este usuario esta logueado: " + id);
            setUserData(data);
            setIsLogin(true);

        }).catch((error) => {
            //setError(error);
        }).finally(() => {
            //setLoading(false);
        });
    };
    
    const miContexto = {
        userData: userData,
        setUserData: setUserData,
        saveUserData: saveUserData,
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