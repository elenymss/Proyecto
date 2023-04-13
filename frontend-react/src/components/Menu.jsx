import React from 'react';
import menu from '../assets/img/menu.png'
import { Link } from 'react-router-dom'
function CompMenu (){
    return (
        <div>
            <nav className="menu fixed-top">
            <input   type="checkbox" id="check" />

            <label for="check" className="checkbtn">
            <img className="ms-3" src={menu}/>
            </label>

            <Link to={"/"} className="enlace">
            <img src="#" alt="" className="logo" />
            </Link>
                <ul className="items">
                <li><Link to={"/"} >INICIO</Link></li>
                {/* <li><a href="#">Portafolio</a></li>  */}
                <li><Link to={"/"} >NOSOTROS</Link></li>
                <li><Link to={"/contactos"} >CONTACTOS</Link></li>
        
                </ul>
                

            </nav>
        </div>
        
    );
}
export default CompMenu;