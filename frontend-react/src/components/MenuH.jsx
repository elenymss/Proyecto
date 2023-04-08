import React from 'react';

function MenuHorizontal (){
    return(
      <div className='bg-navh'>
      <nav id="navbar-example2" className="navbar px-3 m-3 p-2 d-flex justify-content-end ">
        <div className="dropdown ">
        <a href="#" className="d-flex align-items-center  text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
          <strong>Daniel</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><a className="dropdown-item" href="#"></a></li>
          <li><a className="dropdown-item" href="#">Configuracion</a></li>
          <li><a className="dropdown-item" href="#">Perfil</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="#">Salir</a></li>
        </ul>
      </div>
  
      </nav>
      </div>
    )
};


export default MenuHorizontal;