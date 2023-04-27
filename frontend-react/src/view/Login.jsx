import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/svg/img1.svg"
function InicioSesion (){
    return(   
    <section className="vh-100 bg-login">
    <div className="container py-5 h-100">
      <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-7 col-xl-4">
          <img src={(img1)}className="img-fluid"
          />
              
        </div>
        <div class="col-md-7 col-lg-5 col-xl-4 offset-xl-1 bg-cont">
          <form className="p-5">
            <h2 className="text-center bg-text ">Inicia Sesion</h2>
            <div className="form-outline mb-4 mt-2">
            <label className="form-label link" for="user">Usuario</label>
              <input type="email" name="email" id="user" className="form-control form-control-lg" required />
              
            </div>

            <div className="form-outline mb-4">
            <label className="form-label link" for="pass">Contraseña</label>
              <input type="password" name="password" id="pass" className="form-control form-control-lg" required/>
              
            </div>
  
            <div className="d-flex justify-content-around align-items-center mb-4">
     
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                <label className="form-check-label" for="form1Example3"> Remember me </label>
              </div>
              {/* <a href="#!">Forgot password?</a> */}
            </div>
            <div className="d-flex justify-content-center mt-5">
            <button type="submit" className=" btn-login p-2">Sign in</button>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <Link to="/" className="link">Volver al menu principal </Link>
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