import React from "react";
import CompMenu from "../components/Menu.jsx";
import CompFooter from "../components/footer.jsx";

//import img-svg
import svg1 from "../assets/svg/svg1.svg";
import svg2 from "../assets/svg/svg2.svg";
import svg3 from "../assets/svg/svg3.svg";
import svg4 from "../assets/svg/svg4.svg";
import svg5 from "../assets/svg/svg5.svg";

//img-png
import appmovil from "../assets/img/app.png"
import emprendimiento from "../assets/img/emprendimiento.png";
import muro from "../assets/img/muro.png";
import psi from "../assets/img/psi.png"


function ViewPrincipal() {
  return (
    <div>
      <CompMenu />
      <main className="py-5 ">
        <div className="contenido mt-5 py-3 cont-menu mb-5" id="inicio">
          <section className="card-c1">
            <div className="wrapper">
              <h2 className="typing-demo">
                Bienvenidos a Cultupaz<span></span>
              </h2>
            </div>
            <p>
            <strong>Cultupaz</strong> se enfoca en plantear mediante un análisis
            estructurado el perfil psicológico adecuado que permita
            identificar las características de la personalidadlas personas que sean
            posibles causantes de anomalías en la seguridad.
            </p>
            <div className="options">
              <button className="btn1" type="submit">
                Registrate
              </button>
              {/* <button className="btn2" type="submit" >Ingresar</button> */}
              <a href="./user/index.jsx" className="btn-neon">
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>
                Ingresar
              </a>
            </div>
          </section>
          <section className="card-c1">
            <img className="img-fluid1" src={appmovil} alt="img" />
          </section>
        </div>
        {/* <hr className="line1 shadow-primary" /> */}
        <div class="cards-1">
          <div className="container-fluid pt-4 " >
            <div className="text-center">
              <h1 className=" text-uppercase text-st p-2">
                Servicios
              </h1>
            </div>
            <div class="row ">
                <div class="col-lg-12 card-cont pt-3">
                      <div class="card">
                        <div class="card-image bg-svg">
                            <img className="c-img" src={svg1} alt="My Happy SVG"  />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Psicologos comprometidos</h5>
                        </div>
                    </div>
                   
                    <div class="card">
                        <div class="card-image bg-svg">
                            <img className="c-img" src={svg2}  alt="My Happy SVG"  />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Seguro y privado</h5>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image bg-svg">
                            <img className="c-img" src={svg3}  alt="My Happy SVG" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Disponibilidad 24/7</h5>
                        </div>
                    </div>
                   
                    <div class="card">
                        <div class="card-image bg-svg">
                            <img className="c-img" src={svg4}  alt="My Happy SVG"  />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Interacción social</h5>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image bg-svg">
                            <img className="c-img" src={svg5}  alt="My Happy SVG"  />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Diversion</h5>
                        </div>
                    </div>
                </div> 
            </div>
          </div>
          {/* <div className="sl-cont2">
            <a className="tem " href="./user/index.jsx">
              <img className="tem-img" src={svg1} alt="juegos" />
              <h5>Diversion</h5>
            </a>
            <a className="tem " href="./user/index.jsx">
              <img src={svg2} alt="artesanias" />
              <h5>Artesanias</h5>
            </a>
            <a className="tem " href="./user/index.jsx">
              <img src={svg3} alt="psicologia" />
              <h5>Psicologia</h5>
            </a>
            <a className="tem" href="./user/index.jsx">
              <img src={svg4} alt="muro" />
              <h5>Muro</h5>
            </a>
          </div> */}
        </div>
        <div className="cont-menu pt-2 mt-4" id="servicios">
        {/* <h1 className="text-center p-3 text-st">Nuestros servicios</h1>  */}
          <section className="desc ">
          <div id="details" class=" bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <img class="img-fluid2 " src={emprendimiento} alt="alternative"/>
                    </div>
                    <div class="col-lg-6">
                        <div class="text-container">
                            <h2>Artesanias</h2>
                            <p>Comparte todo tipo de artesanias registrandolas en nuestra plataforma para ofrecerlas al publico, de esa manera fomentamos la creatividad e iniciativa de muchos de los aprendices. </p>
                            <a class="btn btn-primary" href="#details-1-lightbox">Sube tu arte</a>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
          </section>
          <section className="desc">
          <div class="basic-2 bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="text-container">
                            <h2>Nuestro muro virtual</h2>
                            <p>Consiste en un muro virtual donde te permite crear tantos posts como quieras, individualmente de manera anonima, que pueden ser en formato texto, imagen, hipervínculos, vídeos,… Las posibilidades creativas aumentan cuando nos registramos, ya que podemos dar acceso a quien queramos.</p>
                            {/* <ul class="list-unstyled li-space-lg">
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body"><strong>Leo a diam sollicit</strong> malesuada proin aiaculis at erat</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body"><strong>Mattis aliquam fauci</strong> aliquam etiam erat velit scelerisq</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body"><strong>Rhoncus aenean vel</strong> ornare arcu odio ut sem nullas</div>
                                </li>
                            </ul> */}
                            <a class="btn btn-primary" href="#header">Socializar</a>
                        </div>
                    </div> 
                    <div class="col-lg-6">
                        
                        <img class="img-fluid3 " src={muro} alt="alternative"
                            />

                    </div> 
                </div>
            </div> 
        </div> 
          </section>
          <section className="desc">
          <div id="details" class=" bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6"> 
                        <img class="img-fluid4 " src={psi} alt="alternative"/>
                    </div>
                    <div class="col-lg-6">
                        <div class="text-container">
                            <h2>Psicologia</h2>
                            <p>La idea principal de este proyecto consiste en lograr que una persona pueda tener un acompañamiento psicologico mediante una reservacion y/o a la vez interactuando por todo el mundo de la psicologia reconociendo asi mucho mas su importancia.</p>
                            <a class="btn btn-primary" href="#details-1-lightbox">Solicitar cita</a>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
          </section>
        </div>

        <section className="page-section" id="nosotros">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Sobre nosotros</h2>
              <h3 className="section-subheading text-muted">
              "Conectividad entre tu mundo y la psicología , nutre tu mente, nutre tu vida."
              </h3>
            </div>
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={psi} alt="..." />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    {/* <h4>2009-2011</h4> */}
                    <h4 className="subheading">Mision</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                    Atender con eficacia, responsabilidad y sentido humanitario los 
                    problemas psicológicos que se presentan en las diferentes áreas 
                    del bienestar y desarrollo social en las que el comportamiento 
                    del individuo reviste esencial importancia para la vida en sociedad, 
                    tanto en los ámbitos local y regional como en el nacional.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={psi} alt="..." />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    {/* <h4>March 2011</h4> */}
                    <h4 className="subheading">Vision</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                    Fomentar la cultura de la paz dentro de los ambientes del SENA si quieres 
                    hablar con nosotros ubicanos en CTPI, por lo tanto para elegir, construir 
                    e integrar a nuestra vida aquellos valores, conocimientos y formas de ser que 
                    nos ayudan a entender actitudes, comportamientos y estilos de vida propicios 
                    de las personas con dichas dificultades.
                    </p>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        </section>
        <div class="cards-2">
            <div class="container ">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <h2 class="h2-heading">Nuestro equipo</h2>
                        <p class="p-heading m-5 ">Eu facilisis sed odio morbi suspendisse interdum consectetur libero id. Viverra nam libero justo laoreet sit eget est lorem</p>
                    </div> 
                </div> 
                {/* carousel-coustomers */}
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row ">
              <div class="col-lg-12 d-flex justity-content-center">
                <div class="card col-4 ">
                  <div class="card-image">
                      <img class="img-fluid" src="images/more-apps-1.jpg" alt="alternative"/>
                  </div>
                    <div class="card-body">
                        <h4 class="card-title">Daniel Dorado</h4>
                        <p className="m-3">Aucibus in ornare aourn quam viverra dictumst vestibulum</p>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="bi bi-facebook img-bi m-1"></i>
                                <i class="bi bi-whatsapp img-bi m-1"></i>
                            </a>
                        </span>
                    </div>
                </div>
                <div class="card col-4">
                    <div class="card-image">
                        <img class="img-fluid" src="images/more-apps-1.jpg" alt="alternative"/>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Andrea Tosne</h4>
                        <p className="m-3">Aucibus in ornare  rhoncus est pellenque elit ullamcorper quis eleifena</p>
                        <span class="fa-stack">
                            <a href="#your-link">
                            <i class="bi bi-facebook img-bi m-1"></i>
                                <i class="bi bi-whatsapp img-bi m-1"></i>
                            </a>
                        </span>
                        
                    </div>
                </div>
              
                <div class="card col-4">
                    <div class="card-image">
                        <img class="img-fluid" src="images/more-apps-2.jpg" alt="alternative"/>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Jessid</h4>
                        <p className="m-2">Aucibus in ornare  rhoncus est pellenque elit ullamcorper quis eleifena</p>
                        <span class="fa-stack">
                            <a href="#your-link">
                            <i class="bi bi-facebook img-bi m-1"></i>
                                <i class="bi bi-whatsapp img-bi m-1"></i>
                              </a>
                        </span>
                        
                    </div>
                </div> 
            </div>
        </div> 
          </div>
         
          <div class="carousel-item ">
            <div class="row ">
              <div class="col-lg-12 d-flex justity-content-center">
                <div class="card col-4 ">
                  <div class="card-image">
                      <img class="img-fluid" src="images/more-apps-1.jpg" alt="alternative"/>
                  </div>
                    <div class="card-body">
                        <h4 class="card-title">Eleny Sancho</h4>
                        <p className="m-3">Aucibus in ornare aourn quam viverra dictumst vestibulum</p>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="bi bi-facebook img-bi m-1"></i>
                                <i class="bi bi-whatsapp img-bi m-1"></i>
                            </a>
                        </span>
                    </div>
                </div>
                <div class="card col-4">
                    <div class="card-image">
                        <img class="img-fluid" src="images/more-apps-1.jpg" alt="alternative"/>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Daniel </h4>
                        <p className="m-3">Aucibus in ornare  rhoncus est pellenque elit ullamcorper quis eleifena</p>
                        <span class="fa-stack">
                            <a href="#your-link">
                            <i class="bi bi-facebook img-bi m-1"></i>
                                <i class="bi bi-whatsapp img-bi m-1"></i>
                            </a>
                        </span>
                        
                    </div>
                </div>
              
                <div class="card col-4">
                    <div class="card-image">
                        <img class="img-fluid" src="images/more-apps-2.jpg" alt="alternative"/>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Angy</h4>
                        <p className="m-2">Aucibus in ornare  rhoncus est pellenque elit ullamcorper quis eleifena</p>
                        <span class="fa-stack">
                            <a href="#your-link">
                            <i class="bi bi-facebook img-bi m-1"></i>
                                <i class="bi bi-whatsapp img-bi m-1"></i>
                              </a>
                        </span>
                        
                    </div>
                </div>
            </div>
        </div> 
          </div>
          <div class="carousel-item ">
            <div class="row ">
              <div class="col-lg-12 d-flex justity-content-center">
                <div class="card col-4 ">
                  <div class="card-image">
                      <img class="img-fluid" src="images/more-apps-1.jpg" alt="alternative"/>
                  </div>
                    <div class="card-body">
                        <h4 class="card-title">wilson</h4>
                        <p className="m-3">Aucibus in ornare aourn quam viverra dictumst vestibulum</p>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="bi bi-facebook img-bi m-1"></i>
                                <i class="bi bi-whatsapp img-bi m-1"></i>
                            </a>
                        </span>
                    </div>
                </div>
                <div class="card col-4">
                    <div class="card-image">
                        <img class="img-fluid" src="images/more-apps-1.jpg" alt="alternative"/>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Karen</h4>
                        <p className="m-3">Aucibus in ornare  rhoncus est pellenque elit ullamcorper quis eleifena</p>
                        <span class="fa-stack">
                            <a href="#your-link">
                            <i class="bi bi-facebook img-bi m-1"></i>
                                <i class="bi bi-whatsapp img-bi m-1"></i>
                            </a>
                        </span>
                        
                    </div>
                </div>
              
                <div class="card col-4">
                    <div class="card-image">
                        <img class="img-fluid" src="images/more-apps-2.jpg" alt="alternative"/>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Visk</h4>
                        <p className="m-2">Aucibus in ornare  rhoncus est pellenque elit ullamcorper quis eleifena</p>
                        <span class="fa-stack">
                            <a href="#your-link">
                            <i class="bi bi-facebook img-bi m-1"></i>
                                <i class="bi bi-whatsapp img-bi m-1"></i>
                              </a>
                        </span>
                        
                    </div>
                </div>
        </div>
        </div> 
          </div>
          
   
  
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
        </div>
            </div> 
        </div>   
      </main>
    <CompFooter/>

    </div>
  );
}
export default ViewPrincipal;
