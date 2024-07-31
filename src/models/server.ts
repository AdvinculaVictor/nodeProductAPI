// import express from 'express'; //op1
import express, { 
  Application,
  Request,
  Response
 } from 'express'; //op2
import routesProducto from '../routes/producto';
import db from '../db/connection';

class Server {
  // private app: express.Application; //op1
  private app: Application; //op2
  private port: string;

  constructor() {
    console.log(process.env.PORT);
    this.app = express();
    this.port = process.env.PORT || '3001';
    this.listen();
    this.middlewares();
    this.routes();
    this.dbConnect();
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log(`Aplicación corriendo en este puerto ${this.port}`);
    })
  }

  routes() {
    this.app.get('/', (req: Request, res: Response) => {
      res.json({
        msg: 'API Working!'
      })
    })
    this.app.use('/api/productos', routesProducto)
  }

  middlewares(){
    //parseamos el body
    this.app.use(express.json());
  }

  async dbConnect(){
    try {
      await db.authenticate();
      console.log('Base de datos conectada.');
    } catch (error) {
      console.log(error);
      console.log('Error al conectarse a la base de datos');
    }
  }
}

export default Server;