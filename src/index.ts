import Server from "./models/server";
import dotenv from 'dotenv';

//Se configuran las variables de ambiente
dotenv.config();

const server = new Server();