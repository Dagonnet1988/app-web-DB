import { db } from 'db';
import { User } from './user';
import express, {Application}from "express";
import cors from "cors";


import userRoutes from '../routes/routes';


class Server {

  private app;
  private port: number;
  private apiPaths = {
    users: '/'
  }

  constructor () {
    this.app = express();
    this.port = 2000 ;

    this.dbConection();
    this.middlewares();
    this.routes();
  }
  
  async dbConection() {
    try {
      
      await User.sync(); 
      console.log('Database Online');
      
    } catch (error) {     

    }
  }

  middlewares () {

    this.app.use(cors ({}));

    this.app.use( express.json() );

    this.app.use( express.static('public'));





  }

  routes () {
    this.app.use( this.apiPaths.users, userRoutes)

  }

  listen (){
    this.app.listen (this.port, () => {
      console.log(`Servidor corriendo en puerto ${ this.port}!!`);

    })
  }

}

export default Server;
