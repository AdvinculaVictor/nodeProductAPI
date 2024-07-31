import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('advinculaDB', 'Bewjodvmb1', 'Bewjodvmb*1', {
  host: 'advincula-server.database.windows.net',
  dialect: 'mssql'
  // ,
  // logging: false //Para remover el SELECT 1+1
});

export default sequelize;