import React from "react";
import MenuHorizontal from "../../components/MenuH.jsx";
import MenuVertical from "../../components/MenuV.jsx";
import CompShowUsers from "./compUser/ShowUser.jsx";

function ViewAdmin2() {
  return (
    <div className="row">
      <MenuVertical></MenuVertical>
      <div className="col-9 position-absolute top-0 end-0 m-2">
        <MenuHorizontal></MenuHorizontal>
        <div className="container px-4 py-4">
          <h2 className="pb-2 border-bottom">Aprendices</h2>
              <CompShowUsers></CompShowUsers>
            </div>
          </div>
          
        </div>
      
  );
}

export default ViewAdmin2;
