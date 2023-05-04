import React, { useState} from "react";
import { Link , useNavigate} from "react-router-dom";
import img1 from "../assets/svg/img1.svg"
import axios from "axios";

import ValidationLogin  from '../data/loginValidation.js'

function InicioSesion() {
  
  const [values, setValues] = useState({
        correo: '',
        passw: ''
    })
    const navigate = useNavigate();
    // Validaciones de errores
    const [errors, setErrors] = useState({}) 

    // Codigo para capturar los datos que el usuario escribe en los inputs
    const datosEntrada = (event) => {
        setValues (prev => ({...prev, [event.target.name]: [event.target.value] }))
    }

    const datoEnviado = (event) => {
        event.preventDefault();
        setErrors(ValidationLogin(values));

        if (errors.correo === "" && errors.passw === "") {
            axios.post('http://localhost:8000/login', values)
            .then(res => {
                if (res.data === 'Success') {
                    navigate('/')
                }else {
                    alert('El usuario no existe');
                }      
            })
        }
    }
    return(   
    <div className="vh-100 bg-login">
    <div className="container py-5 h-100">
      <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-7 col-xl-4">
          <img src={img1}className="img-fluid"/>    
        </div>
        <div class="col-md-7 col-lg-5 col-xl-4 offset-xl-1 bg-cont">
          <form className="p-5" onClick={datoEnviado}>
            <h2 className="text-center bg-text ">Inicia Sesion</h2>
            <div className="form-outline mb-4 mt-2">
            <label className="form-label link" for="user">Usuario</label>
                  <input type="email" name="correo" id="user" className="form-control form-control-lg" onChange={datosEntrada} />
                  {/* Mostrar los errores */}
                  {errors.correo && <span className="text-danger"> {errors.correo}</span>}
              
            </div>

            <div className="form-outline mb-4">
            <label className="form-label link" for="pass">Contraseña</label>
                  <input type="text" name="passw" id="pass" className="form-control form-control-lg" onChange={datosEntrada} />
                  {/* Mostrar los errores */}
                  {errors.passw && <span className="text-danger"> {errors.passw}</span>}
              
            </div>
  
            {/* <div className="d-flex justify-content-around align-items-center mb-4">
     
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                <label className="form-check-label" for="form1Example3"> Remember me </label>
              </div>
              {/* <a href="#!">Forgot password?</a> 
            </div>*/}
            <div className="d-flex justify-content-center mt-5">
            <button type="submit" className=" btn-login p-2" >Iniciar Sesión</button>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <Link to="/login" className="link">Volver al menu principal </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InicioSesion;