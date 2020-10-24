import React, {useState} from 'react';
import { getFirestore } from '../firebase/index.js';

export const InfoContext = React.createContext([]);

export const InfoProvider = (props) =>{
    
    const [userData, setUserData] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [myPurchase, setMyPurchase] = useState({});
    //const [newEmail, setNewEmail] = useState();

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
                    //} else{
                    //   console.log('Ya existe una cuenta con ese email, por favor logueate');
                    //}


                } else {
                    alert("Ya existe un usuario con email: " + newEmail);
                }
                
            });

    };
    
    const miContexto = {
        userData: userData,
        setUserData: setUserData,
        saveUserData: saveUserData,
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