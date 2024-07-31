"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('advinculaDB', 'Bewjodvmb1', 'Bewjodvmb*1', {
    host: 'advincula-server.database.windows.net',
    dialect: 'mssql'
    // ,
    // logging: false //Para remover el SELECT 1+1
});
exports.default = sequelize;
