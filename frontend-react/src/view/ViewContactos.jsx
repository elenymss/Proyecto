import React from "react";
import CompMenu from "../components/Menu.jsx";
import CompFooter from "../components/footer.jsx";
function ViewContactos() {
    return (
        <div>
           <CompMenu/> 
            <main class="bg-contactos">
        <div class="container mt-5 py-5 ">
            <div class="row align-items-md-stretch mb-4">
                <div class="col-md-6">
                    <div class="h-100 p-5 text-white bg-contact rounded-3">
                        <h2>Lineas de atencion: </h2>
                        <div class="d-flex justify-content-between">
                            <ul class="navbar-nav">
                                <li class="nav-item ms-2"><b>Telefono: </b> 98982930-23</li>
                                <li class="nav-item ms-2"><b>celular:</b> 312382893</li>
                                <li class="nav-item ms-2"><b>email: </b> fnc201@hotmail.com <p></p>
                                </li>
                                <li class="nav-item ms-2 mb-2"><a class="nav-link" href="#">Mas puntos de atencion...</a>
                                </li>
                                <div class="d-flex">
                                    <img class="ms-2" src="icons/facebook.png" width="15%"/>
                                    <img class="ms-2" src="icons/gorjeo.png" width="15%"/>
                                    <img class="ms-2" src="icons/instagram.png" width="15%"/>
                                </div>

                            </ul>
                            <img src="img/contactos.png" width="40%" height="40%"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="h-100 p-5 bg-light border rounded-3">
                        <h2>Ayudanos a crecer</h2>
                        <form>

                            <h5>Motivados a mejorar</h5>
                            <p>Estamos felices de que hagas parte de nuestra gran compañia </p>
                            <div class="input-group">
                                <textarea class="form-control" aria-label="With textarea"
                                    placeholder="Deja tu comentario"></textarea>
                                <button class="btn btn-setup" type="button">enviar</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
            <div class="p-1 mb-4 bg-light rounded-3">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63778.383704244596!2d-76.6349537904344!3d2.4574702454257165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30030ff9207c27%3A0xf76217f9f8464ebe!2sParque%20Caldas!5e0!3m2!1ses!2sco!4v1667879634948!5m2!1ses!2sco"
                    width="100%" height="450"  allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>




        </div>
     
    
    
    </main>
   <CompFooter/>
    </div>


)}

export default ViewContactos;
