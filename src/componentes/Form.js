import React, {useState, useContext} from 'react';
import { InfoContext } from '../context/infoContext';
import {NavLink} from 'react-router-dom';
import 'firebase/firestore';

import './estilos/Form.css'

function Form() {
        const [data, setData]= useState({name:'',user: '',email: '',pass: '',tel: ''});
        const infoContext = useContext(InfoContext); 
        
        const handleChange =(e) => {
            setData({
                ...data, [e.target.name] : e.target.value
            })
        }

        const handleLoginSubmit = (e) => {
            e.preventDefault();
            console.log('mostrar datos:' + data.emailLogin, data.passLogin);
            console.log(data);
            infoContext.login(data);
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('mostrar datos:' + data.name, data.user, data.email,  data.pass, data.tel);
            console.log(data);
            infoContext.saveUserData(data);
        }
        
        function comprobarEmail(){
            const email1 = document.form1.email.value;
            const email2 = document.form1.email2.value;

            if (email1 === email2){
            return;
            }else{
            alert("Los dos emails son diferentes, ingresalo nuevamente")
            }   
        }

        if (infoContext.isLogin) {
            return (
                <div className="container">
                    <h2>Ya estás logueado puedes seguir con tus compras</h2>
                    <button className = "btn btn-dark" >
                        <NavLink to = {`/`} className = "nav-link" > Elegir productos </NavLink> 
                    </button> 
                    <button className="btn btn-dark">
                      <NavLink to={`/cart`} className="nav-link">Ir al Carrito</NavLink>
                    </button>
                </div>
            );

        } else {

        return(

            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card-body">
                            <h6 className="card-title">Ya tienes una cuenta?</h6>
                                <form onSubmit={handleLoginSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail1">Email*</label>
                                        <input type="email" name="emailLogin" onChange={handleChange} className="form-control" id="inputEmail1" aria-describedby="emailHelp" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputPassword1">Password*</label>
                                        <input type="password" name="passLogin" onChange={handleChange} className="form-control" id="inputPassword1" required/>
                                    </div>

                                    <button type="submit" className="btn btn-dark">Login</button>
                                    
                                </form>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card-body">
                            <h6 className="card-title">Crea una cuenta nueva para comprar</h6>
                                <form onSubmit={handleSubmit} name="form1">
                                    <div className="form-group">
                                        <label htmlFor="inputAlias2">Usuario*</label>
                                        <input type="text" name="user" onChange={handleChange} className="form-control" id="inputAlias2" required/>  
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputName2">Nombre y Apellido*</label>
                                        <input type="text" name="name" onChange={handleChange} className="form-control" id="inputName2" required/> 
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputTel2">Telefono*</label>
                                        <input type="text" name="tel" onChange={handleChange} className="form-control" id="inputTel2" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail2">Email*</label>
                                        <input type="email" name="email" onChange={handleChange} className="form-control" id="inputEmail2" aria-describedby="emailHelp" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail2">Por favor repite tu email*</label>
                                        <input type="email" name="email2" onChange={handleChange} onBlur={comprobarEmail} className="form-control" id="inputEmail3" aria-describedby="emailHelp" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputPassword2">Password*</label>
                                        <input type="password" name="pass" onChange={handleChange} className="form-control" id="inputPassword2" required/>
                                    </div>
                        
                                    <button type="submit" className="btn btn-dark" >Crear cuenta</button>
                                </form>
                        </div>

                    </div>

                </div>

            </div>
                    


        );

        }
    
    }

export default Form;




