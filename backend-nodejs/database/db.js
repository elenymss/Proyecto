// import { Sequelize } from "sequelize";

import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "cultupaz1",
});

db.connect((err) => {
  if (err) throw err;

  console.log("Base de datos conectada");
});

// const db = new Sequelize("cultupaz1", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

export default db;
