import React from 'react';
import menu from '../assets/img/menu.png'
function CompMenu (){
    return (
        <div>
            <nav className="menu fixed-top">
            <input   type="checkbox" id="check" />

            <label for="check" className="checkbtn">
            <img className="ms-3" src={menu}/>
            </label>

            <a href="#" className="enlace">
            <img src="#" alt="" className="logo" />
            </a>
                <ul className="items">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                {/* <li><a href="#">Portafolio</a></li>  */}
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#contactos">Contacto</a></li>
                </ul>
            </nav>
        </div>
        
    );
}
export default CompMenu;