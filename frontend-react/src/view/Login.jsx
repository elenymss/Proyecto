import React from "react";
import img1 from "../assets/svg/img1.svg"
function InicioSesion (){
    return(   
    <section class="vh-100 bg-login">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-8 col-lg-7 col-xl-6">
          <img src={img1}
            class="img-fluid" alt="Phone image"/>
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1 bg-cont">
          <form className="p-5">
            <h2 className="text-center bg-text ">Inicio Sesion</h2>
            <div class="form-outline mb-4 mt-2">
            <label class="form-label link" for="user">Usuario</label>
              <input type="email" id="user" class="form-control form-control-lg" required />
              
            </div>

            <div class="form-outline mb-4">
            <label class="form-label link" for="pass">Contraseña</label>
              <input type="password" id="pass" class="form-control form-control-lg" required/>
              
            </div>
  
            <div class="d-flex justify-content-around align-items-center mb-4">
     
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                <label class="form-check-label" for="form1Example3"> Remember me </label>
              </div>
              {/* <a href="#!">Forgot password?</a> */}
            </div>
            <div className="d-flex justify-content-center mt-5">
            <button type="submit" class=" btn-login p-2">Sign in</button>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <a className="link" href="#!">Volver al menu principal </a>
            </div>
           
  
         
  
            {/* <a class="btn btn-primary btn-lg btn-block bg-btn"  href="#!"
              role="button">
              <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
            </a>
            <a class="btn btn-primary btn-lg btn-block"  href="#!"
              role="button">
              <i class="fab fa-twitter me-2"></i>Continue with Twitter</a> */}
  
          </form>
        </div>
      </div>
    </div>
  </section>
    )
}

export default InicioSesion;