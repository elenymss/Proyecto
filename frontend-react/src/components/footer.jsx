import React from "react";

function CompFooter() {
  return (
    <div class="container-fluid ps-0 pe-0" id="contactos">
      {/* Footer  */}
      <footer class="text-center text-lg-start text-white bg-footer p-3">
        <div class="container p-4 pb-0">
          <section class="">
            <div class="row">
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  Descripcion:
                </h6>
                <p>
                  En este apartado encontraras los materiales utilizados en este
                  proyecto, tambien cuenta con informacion de contactos.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  Material usados
                </h6>
                <p>
                  <a class="text-white">Bootstrap, css</a>
                </p>
                <p>
                  <a class="text-white">Reactjs, nodejs</a>
                </p>
                <p>
                  <a class="text-white">mysql</a>
                </p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <a class="text-white">https://sena.edu.co</a>
                </p>
                <p>
                  <a class="text-white">@Cultupaz</a>
                </p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Contactos</h6>
                <p>
                  <i class="fas fa-envelope mr-3"></i> info@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> 3123445622
                </p>
                <p>
                  <i class="fas fa-print mr-3"></i> 313335647
                </p>
              </div>
            </div>
          </section>

          <hr class="my-3" />

          <section class="p-3 pt-0">
            <div class="row d-flex align-items-center">
              <div class="col-md-7 col-lg-8 text-center text-md-start">
                <div class="p-3">
                  2023
                  <p>ADSI SENA CTPI</p>
                </div>
              </div>
              <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a class="btn btn-outline-light btn-floating m-1 text-white"role="button">
                  <i class="fab fa-facebook-f"></i>
                </a>

                <a class="btn btn-outline-light btn-floating m-1 text-white"role="button">
                  <i class="fab fa-twitter"></i>
                </a>

                <a class="btn btn-outline-light btn-floating m-1 text-white" role="button">
                  <i class="fab fa-google"></i>
                </a>

                <a class="btn btn-outline-light btn-floating m-1 text-white" role="button">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default CompFooter;
