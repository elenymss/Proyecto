import express from "express";
import cors from "cors";
//import conection db

import db from "./database/db.js";
try {
  await db.authenticate();
  console.log("conexion exitosa a la base de datos");
} catch (error) {
  console.log(`error de conexion, el error es: ${error}`);
}
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
    "INSERT INTO usuarios (`nombres` , `apellidos`, `telefono`,`ficha`,`genero`,`fechaNacimiento`,`tipoDocumento`,`numeroIden`,`usuario`,`correo`, `passw`,`confPass`,) VALUES (?)";
  const values = [
    req.body.nombres,
    req.body.apellidos,
    req.body.telefono,
    req.body.ficha,
    req.body.genero,
    req.body.fechaNacimiento,
    req.body.TipoDocumento,
    req.body.numeroIden,
    req.body.usuario,
    req.body.correo,
    req.body.passw,
    req.body.confPass,
  ];
  console.log(values);

  db.query(sql1, [values], (err, data) => {
    if (err) {
      return res.json("error");
    } else {
      return res.json(data);
    }
  });
});

app.get("/", (req, res) => {
  res.send("Holaxd");
});
app.listen(8000, () => {
  console.log("corriendo por el puerto http://localhost:8000/");
});
