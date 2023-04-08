import axios from "axios";
import React from "react";
import MenuHorizontal from "../../../components/MenuH";
import MenuVertical from "../../../components/MenuV";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/users/";

const CompCreateUser = () => {
  const [user, setUser] = useState("");
  const [nombre_usuario, setNombre_usuario] = useState("");
  const [apellido_usuario, setApellido_usuario] = useState("");
  const [email_usuario, setEmail_usuario] = useState("");
  const [telefono, setTelefono] = useState("");

  const navigate = useNavigate();

  //procedimiento guardar
  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      user: user,
      nombre_usuario: nombre_usuario,
      apellido_usuario: apellido_usuario,
      email_usuario: email_usuario,
      telefono: telefono,
    })
    navigate('/admin/aprendiz');
  };
  return (
    <div className="row">
      <MenuVertical></MenuVertical>
      <div className="col-9 position-absolute top-0 end-0 m-2">
        <MenuHorizontal></MenuHorizontal>
        <div className="container px-4 py-4">
        <h2 className="pb-2 border-bottom">Aprendiz</h2>
          <div className="d-flex justify-content-center">
            <div className="col-lx-12 ">
            <h4 className="mt-1 text-center">Nuevo regitro</h4>
              <form className="p-5" onSubmit={store}>       
                <div className="d-flex text-center">
                  <div className=" m-1 col-6">
                    <div class="form-outline mb-4 mt-2">
                      <label class="form-label link">Usuario</label>
                      <input
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        type="text"
                        class="form-control form-control-lg"
                        required
                      />
                    </div>

                    <div class="form-outline mb-4 mt-2">
                      <label class="form-label link">Apellido</label>
                      <input
                        value={apellido_usuario}
                        onChange={(e) => setApellido_usuario(e.target.value)}
                        type="text"
                        id="apellido"
                        class="form-control form-control-lg"
                        required
                      />
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label link" for="pass">
                        telefono
                      </label>
                      <input
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        type="number"
                        class="form-control form-control-lg"
                        required
                      />
                    </div>
                  </div>
                  <div className=" m-1 col-6">
                    <div class="form-outline mb-4 mt-2">
                      <label class="form-label link">Nombre</label>
                      <input
                        value={nombre_usuario}
                        onChange={(e) => setNombre_usuario(e.target.value)}
                        type="text"
                        class="form-control form-control-lg"
                      />
                    </div>
                    <div class="form-outline mb-4 mt-2">
                      <label class="form-label link">email</label>
                      <input
                        value={email_usuario}
                        onChange={(e) => setEmail_usuario(e.target.value)}
                        type="email"
                        class="form-control form-control-lg"
                      />
                    </div>

                  </div>
                </div>

                <div className="d-flex justify-content-center mt-5">
                  <button type="submit" class=" btn-login p-2">
                    Registrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompCreateUser;
