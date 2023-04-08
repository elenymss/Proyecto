import React from "react";
import MenuHorizontal from "../../components/MenuH.jsx";
import MenuVertical from "../../components/MenuV.jsx";

// svg

import comunid from "../../assets/svg/comunid.svg"

function ViewAdmin() {
  return (
    <div className="row">
      <MenuVertical></MenuVertical>
      <div className="col-9 position-absolute top-0 end-0 m-2">
        <MenuHorizontal></MenuHorizontal>
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example3"
          data-bs-smooth-scroll="true"
          className="scrollspy-example-2"
          tabindex="0"
        >
          <div className="container px-4 py-5">
            <h2 className="pb-2 border-bottom">Inicio</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
              <div className="feature col">
                <div className="feature-icon bg-icon ">
                  <i class="bi bi-people-fill" ></i>
                </div>
                <h2>Usuarios</h2>
                <p>
                  Total de usuario registrados actualmente
                </p>
                <a href="#" className="icon-link">
                  ver
                  <svg className="bi" width="1em" height="1em"></svg>
                </a>
              </div>
              <div className="feature col">
                <div className="feature-icon bg-icon2 ">
                <i class="bi bi-bar-chart-fill"></i>
                </div>
                <h2>Actividad</h2>
                <p>
                  Registro actividad de los usuarios
                </p>
                <a href="#" className="icon-link">
                  ver
                  <svg className="bi" width="1em" height="1em"></svg>
                </a>
              </div>
              <div className="feature col">
                <div className="feature-icon bg-icon">
                  <i class="bi bi-clipboard-data"></i>
                </div>
                <h2>Artesanias</h2>
                <p>
                 total artesanias subidas
                </p>
                <a href="#" className="icon-link">
                  ver
                  <svg className="bi" width="1em" height="1em"></svg>
                </a>
              </div>
            </div>

            {/* <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example3"
              data-bs-smooth-scroll="true"
              className="scrollspy-example-2"
              tabindex="0"
            >
              <h2 className="pb-2 border-bottom"></h2>

              <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <div className="col d-flex flex-column align-items-start gap-2">
                  <h3 className="fw-bold">
                    Cultupaz
                  </h3>
                  <p className="text-body-secondary">
                    Paragraph of text beneath the heading to explain the
                    heading. We'll add onto it with another sentence and
                    probably just keep going until we run out of words.
                  </p>
                  <a href="#" className="btn btn-primary btn-lg">
                    Primary button
                  </a>
                </div>

                <div className="col">
                  <div className="row row-cols-1 row-cols-sm-2 g-4">
                    <div className="col d-flex flex-column gap-2">
                      <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                        <svg className="bi" width="1em" height="1em"></svg>
                      </div>
                      <h4 className="fw-semibold mb-0">Featured title</h4>
                      <p className="text-body-secondary">
                        Paragraph of text beneath the heading to explain the
                        heading.
                      </p>
                    </div>

                    <div className="col d-flex flex-column gap-2">
                      <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                        <svg className="bi" width="1em" height="1em"></svg>
                      </div>
                      <h4 className="fw-semibold mb-0">Featured title</h4>
                      <p className="text-body-secondary">
                        Paragraph of text beneath the heading to explain the
                        heading.
                      </p>
                    </div>

                    <div className="col d-flex flex-column gap-2">
                      <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                        <svg className="bi" width="1em" height="1em"></svg>
                      </div>
                      <h4 className="fw-semibold mb-0">Featured title</h4>
                      <p className="text-body-secondary">
                        Paragraph of text beneath the heading to explain the
                        heading.
                      </p>
                    </div>

                    <div className="col d-flex flex-column gap-2">
                      <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                        <svg className="bi" width="1em" height="1em"></svg>
                      </div>
                      <h4 className="fw-semibold mb-0">Featured title</h4>
                      <p className="text-body-secondary">
                        Paragraph of text beneath the heading to explain the
                        heading.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAdmin;
