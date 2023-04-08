import React from "react";
import MenuHorizontal from "../../components/MenuH.jsx";
import MenuVertical from "../../components/MenuV.jsx";
import CompShowAdmin from "./compAdmin/ShowAdmin.jsx";

function ViewAdmin3() {
  return (
    <div className="row">
      <MenuVertical></MenuVertical>
      <div className="col-9 position-absolute top-0 end-0 m-2">
        <MenuHorizontal></MenuHorizontal>
        <div className="container px-4 py-4">
          <h2 className="pb-2 border-bottom">Administradores</h2>
              <CompShowAdmin></CompShowAdmin>
            </div>
          </div>
          
        </div>
      
  );
}

export default ViewAdmin3;
