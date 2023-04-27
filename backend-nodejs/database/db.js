import { Sequelize } from "sequelize";

const db = new Sequelize("cultupaz1", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
