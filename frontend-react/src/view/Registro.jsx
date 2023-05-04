import React, { useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import img2 from '../assets/svg/img2.svg'
import axios from "axios";

import ValidationRegister from '../data/registerValidation'

function RegistroUser() {

  const [values, setValues] = useState({
    nombres: "",
    apellidos: "",
    telefono: "",
    ficha: "",
    genero: "",
    fechaNacimiento: "",
    tipoDocumento: "",
    numeroIden: "",
    usuario: "",
    correo: "",
    passw: "",
    confPass: ""
  })

  const navigate = useNavigate();

  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev =>({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(ValidationRegister(values));

    // VALIDACIÓN PARA CADA UNO DE LOS CAMPOS DEL REGISTRO
    if (errors.nombres === "" && errors.apellidos === "" && errors.telefono === "" && errors.ficha === ""
      && errors.genero === "" && errors.fechaNacimiento === "" && errors.tipoDocumento === "" && errors.numeroIden === ""
       && errors.usuario === "" && errors.correo === "" && errors.passw === "" && errors.confPass === ""
    ){

      // PETICION DEL FRONT AL BACK, CON AXIOS Y SERVIDOR NODEJS
      axios.post('http://localhost:8000/registro', values)
        .then(res => {
          navigate('/login');
        })
        .catch(err => console.log(err))
    }
  }
    return(
    <div className="vh-100 bg-login ">
        <div className="container py-2">
          <div className="row d-flex align-items-center justify-content-center h-100 text-center">
            <div className="col-md-3 col-lg-2 col-xl-4">
              <img src={img2}
                className="img-fluid"/>
            </div>
            <div class="col-md-4 col-lg-2 col-xl-7 offset-xl-1 bg-cont ">
              <form className="p-2" onSubmit={handleSubmit}>
                <h2 className="text-center bg-text ">Registro</h2>
                <div className="d-flex">
                <div className="col-md-2 col-lg-2 col-xl-6 m-1">
                    <div className="form-outline mb-1 mt-2">
                      <label className="form-label link">Nombres</label>
                      <input type="text" name="nombres" id="nombre" className="form-control form-control-lg" onChange={handleInput} />
                      {/* MUESTRO LOS ERRORES CON LAS VALIDACIONES en el campo de nombres */}
                      {errors.nombres && <span className="text-danger"> {errors.nombres}</span>}
                    </div>
                   
                    <div className="form-outline mb-2 mt-2">
                      <label className="form-label link" for="apellido">Telefono</label>
                      <input type="number" name="telefono" id="tel" className="form-control form-control-lg" onChange={handleInput} />
                      {/* MUESTRO LOS ERRORES CON LAS VALIDACIONES en el campo de nombres */}
                        {errors.telefono && <span className="text-danger"> {errors.telefono}</span>}

                      <label className="form-label link" for="apellido">Genero</label>
                      <select name="genero" id="tipoGen" className="form-control form-control-lg" onChange={handleInput}>
                        <option name="select" id="1" className="text-center" >Seleccióne...</option>
                        <option name="masculino" id="2" >Masculino</option>
                        <option name="femenino" id="3">Femenino</option>
                      </select> 
                      {/* MUESTRO LOS ERRORES CON LAS VALIDACIONES en el campo de nombres */}
                            {errors.genero && <span className="text-danger"> {errors.genero}</span>}
                    </div>
                    <div className="form-outline mb-2">
                      <label className="form-label link" for="pass">Tipo documento</label>
                      <select name="tipoDocumento" id="tipoDoc" className="form-control form-control-lg" onChange={handleInput}>
                        <option name="options" id="1" className="text-center" >Seleccióne...</option>
                        <option name="TI" id="2" className="text-center" >Tarjeta de identidad</option>
                        <option name="CC" id="3" className="text-center">Cedula de ciudadania</option>
                      </select> 
                      {/* MUESTRO LOS ERRORES CON LAS VALIDACIONES en el campo de nombres */}
                            {errors.tipoDocumento && <span className="text-danger"> {errors.tipoDocumento}</span>}

                      <label className="form-label link" for="pass">Nombre de usuario</label>
                      <input type="text" name="usuario" id="user" className="form-control form-control-lg" onChange={handleInput} />
                        {/* MUESTRO LOS ERRORES CON LAS VALIDACIONES en el campo de nombres */}
                            {errors.usuario && <span className="text-danger"> {errors.usuario}</span>}
                      <label className="form-label link" for="pass">Contraseña</label>
                      <input type="password" name="passw" id="pass" className="form-control form-control-lg" onChange={handleInput} />
                      {/* MUESTRO LOS ERRORES CON LAS VALIDACIONES en el campo de nombres */}
                            {errors.passw && <span className="text-danger"> {errors.passw}</span>}
                    </div>
                    
                </div>
                <div className="col-md-2 col-lg-2 col-xl-6 m-1">
                    <div className="form-outline mb-1 mt-2">
                        <label className="form-label link" for="nombre">Apellidos</label>
                      <input type="text" name="apellidos" id="apellido" className="form-control form-control-lg" onChange={handleInput} />
                      {/* MUESTRO LOS ERRORES CON LAS VALIDACIONES en el campo de nombres */}
                            {errors.apellidos && <span className="text-danger"> {errors.apellidos}</span>}
                    </div>
                    <div className="form-outline mb-1 mt-1">
                      <label className="form-label link" for="email">Ficha programa formación</label>
                      <input type="text" name="ficha" id="email" className="form-control form-control-lg" onChange={handleInput} />
                      {/* MUESTRO LOS ERRORES CON LAS VALIDACIONES en el campo de nombres */}
                            {errors.ficha && <span className="text-danger"> {errors.ficha}</span>}
                    </div>
                   
                    <div className="form-outline mb-2">
                      <label className="form-label link" for="pass">Fecha nacimiento</label>
                      <input type="date" name="fechaNacimiento" id="fNac" className="form-control form-control-lg text-center" onChange={handleInput} />
                      {/* MUESTRO LOS ERRORES CON LAS VALIDACIONES en el campo de nombres */}
                            {errors.fechaNacimiento && <span className="text-danger"> {errors.fechaNacimiento}</span>}
                    </div>

                    <div className="form-outline mb-2">
                      <label className="form-label link" for="pass">Numero identificación</label>
                      <input type="number" name="numeroIden" id="ident" className="form-control form-control-lg" onChange={handleInput} />
                      {/* MUESTRO LOS ERRORES CON LAS VALIDACIONES en el campo de nombres */}
                            {errors.numeroIden && <span className="text-danger"> {errors.numeroIden}</span>}

                      <label className="form-label link" for="pass">E-mail</label>
                      <input type="text" name="correo" id="mail" className="form-control form-control-lg" onChange={handleInput} />
                      {/* MUESTRO LOS ERRORES CON LAS VALIDACIONES en el campo de nombres */}
                            {errors.correo && <span className="text-danger"> {errors.correo}</span>}
                      
                      <label className="form-label link" for="pass">Confirmar contraseña</label>
                      <input type="password" name="confPass" id="passConf" className="form-control form-control-lg" onChange={handleInput} />
                      {/* MUESTRO LOS ERRORES CON LAS VALIDACIONES en el campo de nombres */}
                            {errors.confPass && <span className="text-danger"> {errors.confPass}</span>}
                    </div>
                </div>
                </div>
                
                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" value="regist" className=" btn-login p-2" >Registrarse</button>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <Link to="/login" className="link">Ya tengo cuenta</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}
export default RegistroUser;