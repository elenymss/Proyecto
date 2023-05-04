import express from "express";
import cors from "cors";
import mysql from "mysql";
//import conection db

import db from "./database/db.js";
// try {
//   await db.authenticate();
//   console.log("conexion exitosa a la base de datos");
// } catch (error) {
//   console.log(`error de conexion, el error es: ${error}`);
// }
//import routes

import userRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);

// Codigo para registrar datos en la base de datos...
app.post("/registro", (req, res) => {
  const sql1 =
    "INSERT INTO usuarios (`nombres`  , `apellidos`, `telefono`, `ficha`, `genero` , `fechaNacimiento` , `tipoDocumento` , `numeroIden`, `usuario` , `correo`,  `passw` , `confPass`) VALUES (?)";
  const values = [
    req.body.nombres,
    req.body.apellidos,
    req.body.telefono,
    req.body.ficha,
    req.body.genero,
    req.body.fechaNacimiento,
    req.body.tipoDocumento,
    req.body.numeroIden,
    req.body.usuario,
    req.body.correo,
    req.body.passw,
    req.body.confPass,
  ];
  console.log(values);

  db.query(sql1, [values], (err, data) => {
    if (err) {
      console.log("No se pudo registrar usuarios");
      return res.json("error");
    } else {
      console.log("Se registro un usuario");
      return res.json(data);
    }
  });
});

// Codigo para iniciar sesiones de usuario
app.post("/login", (req, res) => {
  const sql2 = "SELECT * FROM usuarios WHERE `correo` = ? AND `passw` = ?";
  db.query(sql2, [req.body.correo, req.body.passw], (err, data) => {
    // SI HAY UN ERROR, ME RETORNA EL ERROR.
    console.log(req.body);
    if (err) {
      console.log("no se ha iniciado sesion");
      return res.json("Error");
    }
    // Si la longitud de mi data no esta VACIA, verifica de que si hay un registro enviamos un mensaje de exito o de fallo al form login.
    if (data.length > 0) {
      console.log("Si se ha iniciado la sesión de usuario");
      return res.json("Success");
    } else {
      return res.json("Faile");
    }
  });
});

// app.get("/", (req, res) => {
//   res.send("Holaxd");
// });
app.listen(8000, () => {
  console.log("corriendo por el puerto http://localhost:8000/");
});
