import React from "react";
import { Link } from 'react-router-dom'
function MenuVertical() {
  return (
    <div className="col-3 position-fixed">
      <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
        <nav className="nav nav-pills flex-column">
          <div className="nav navbar-vertical m-2 ">
            <div className="d-flex flex-column flex-shrink-0 p-5 text-white bg-nav">
              <a href="/"className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Cultupaz</span>
              </a>
              <hr />
              <ul className="nav nav-pills flex-column  mt-1 mb-5">
                <li className="nav-item">
                <Link to={"/admin"} className="nav-link active m-1" aria-current="page"> <i className="bi bi-house-door-fill me-2"></i>
                    Inicio</Link>
                </li>
                <li>
                <Link to={"/admin/aprendiz"} className="nav-link text-white  m-1" aria-current="page"><i className="bi bi-person-vcard me-2"></i>
                    Aprendices</Link>

                </li>
                <li>
                <Link to={"/admin/admin"} className="nav-link text-white  m-1" aria-current="page"><i className="bi bi-people-fill me-2"></i>
                Administradores</Link>
            
                </li>
                <li>
                <Link to={"/admin/artesanias"} className="nav-link text-white  m-1" aria-current="page"> <i className="bi bi-calendar2-check-fill me-3"></i>
                    Artesanias</Link>
                </li>
              </ul>
              <hr />

              <div className="mt-5 pt-5 d-flex justify-content-center">
                <button className="btn btn-primary ">Nuevo</button>
              </div>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
}

export default MenuVertical;
