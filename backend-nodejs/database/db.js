import {Sequelize} from 'sequelize';

const db = new Sequelize('bd_cultupaz', 'root', '',{
    host:'localhost',
    dialect:'mysql'
})

export default db;