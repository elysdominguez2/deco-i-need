import React, {useState} from 'react';
import { getFirestore } from '../firebase/index.js';

export const InfoContext = React.createContext([]);

export const InfoProvider = (props) =>{
    
    const [userData, setUserData] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [myPurchase, setMyPurchase] = useState();

    const saveUserData = (data) => {
        const db = getFirestore();
        const usuarios = db.collection("usuarios");
        
        const newEmail = data.email;

        usuarios.where("email", "==", newEmail)
            .get()
            .then(querySnapshot => {

                if(querySnapshot.size === 0) {
                    console.log('Ningun usuario encontrado');
                    usuarios.add(data)
                    .then(({ id }) => {
                        console.log("Este usuario esta logueado " + id);
                        alert("Este usuario esta logueado: " + id);
                        setUserData(data);
                        setIsLogin(true);

                    }).catch((error) => {
                      
                    }).finally(() => {
                       
                    });
                    
                } else {
                    alert("Ya existe un usuario con email: " + newEmail);
                }
            });
    };

        const login = (data) => {
        const db = getFirestore();
        const usuarios = db.collection("usuarios");
        
        const emailLogin = data.emailLogin;
        const passLogin = data.passLogin;

        usuarios.where("email", "==", emailLogin)
            .get()
            .then(querySnapshot => {

                if(querySnapshot.size === 0) {
                    alert("Email o password incorrectos.");

                } else {
                    querySnapshot.forEach(function(doc) {
                        const dataFromDb = doc.data();
                        if (passLogin === dataFromDb.pass) {
                            setUserData(dataFromDb);
                            setIsLogin(true);
                        } else {
                            alert("Email o password incorrectos.");
                        }
                    });
                }
            });
    };
    
    const miContexto = {
        userData: userData,
        setUserData: setUserData,
        saveUserData: saveUserData,
        login: login,
        isLogin: isLogin,
        setIsLogin: setIsLogin,
        myPurchase: myPurchase,
        setMyPurchase: setMyPurchase,
        test: "hola test"
    };

    return(
        <InfoContext.Provider value={miContexto}>
            {props.children}
        </InfoContext.Provider>
    )
}