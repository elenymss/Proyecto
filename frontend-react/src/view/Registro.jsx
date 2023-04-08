import React from "react";
import img2 from '../assets/svg/img2.svg'

function RegistroUser(){
    return(
        <section class="vh-100 bg-login ">
        <div class="container py-2">
          <div class="row d-flex align-items-center justify-content-center h-100 text-center">
            <div class="col-md-3 col-lg-2 col-xl-4">
              <img src={img2}
                class="img-fluid" alt="Phone image"/>
            </div>
            <div class="col-md-4 col-lg-2 col-xl-7 offset-xl-1 bg-cont ">
              <form className="p-5">
                <h2 className="text-center bg-text ">Registro</h2>
                <div className="d-flex">
                <div className="col-md-2 col-lg-2 col-xl-6 m-1">
                    <div class="form-outline mb-4 mt-2">
                    <label class="form-label link" for="user">Usuario</label>
                    <input type="text" id="user" class="form-control form-control-lg" required />
                    </div>
                   
                    <div class="form-outline mb-4 mt-2">
                    <label class="form-label link" for="apellido">Apellido</label>
                    <input type="text" id="apellido" class="form-control form-control-lg" required />
                    </div>
                    <div class="form-outline mb-4">
                    <label class="form-label link" for="pass">Contraseña</label>
                    <input type="password" id="pass" class="form-control form-control-lg" required/>
                    </div>
                    
                </div>
                <div className="col-md-2 col-lg-2 col-xl-6 m-1">
                <div class="form-outline mb-4 mt-2">
                    <label class="form-label link" for="nombre">Nombre</label>
                    <input type="text" id="nombre" class="form-control form-control-lg" />
                    </div>
                    <div class="form-outline mb-4 mt-2">
                    <label class="form-label link" for="email">email</label>
                    <input type="text" id="email" class="form-control form-control-lg" />
                    </div>
                   
                    <div class="form-outline mb-4">
                    <label class="form-label link" for="pass">Repetir contraseña</label>
                    <input type="password" id="pass" class="form-control form-control-lg" required/>
                    </div>
                </div>
                </div>
                
                <div className="d-flex justify-content-center mt-5">
                <button type="submit" class=" btn-login p-2">Registrarse</button>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <a className="link" href="#!">Volver al menu principal </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}
export default RegistroUser;