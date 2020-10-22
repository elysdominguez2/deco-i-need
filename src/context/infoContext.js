import React, {useState} from 'react';
import { getFirestore } from '../firebase/index.js'

export const InfoContext = React.createContext([]);

export const InfoProvider = (props) =>{
    
    const [userData, setUserData] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    //const [newEmail, setNewEmail] = useState();

    const existeUsuario = (newEmail) => {
        let usuarioEncontrado = false; 
        const db = getFirestore();    
            db.collection("usuarios")
            .where("email", "==", newEmail)
            .onSnapshot(querySnapshot => {
    
                querySnapshot.forEach(document => console.log('El usuario ya existe'));
                usuarioEncontrado = true;
            });
    
        return usuarioEncontrado;
    }

    const saveUserData = (data) => {
        const db = getFirestore();
        const usuarios = db.collection("usuarios");
        //if(setNewEmail !== email){

        if (existeUsuario(data.email)) {
            
        } else {
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
        }
    };
    
    const miContexto = {
        userData: userData,
        setUserData: setUserData,
        saveUserData: saveUserData,
        isLogin: isLogin,
        setIsLogin: setIsLogin,
        orders:[],
        test: "hola test",
        existeUsuario: existeUsuario
    };

    return(
        <InfoContext.Provider value={miContexto}>
            {props.children}
        </InfoContext.Provider>
    )
}