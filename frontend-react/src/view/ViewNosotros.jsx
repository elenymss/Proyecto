import React from "react";
import CompMenu from "../components/Menu.jsx";

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


function ViewNosotros() {
  return (
    <div>
      <CompMenu />
      <main className="py-5 ">
        <section className="page-section pt-5" id="nosotros">
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
        </main>

    </div>
  );
}
export default ViewNosotros;
