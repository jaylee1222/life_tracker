    // server/server.ts
    import express, { Request, Response } from 'express';
    import { sequelize } from './src/infrastructure/database';

    // const sequelize: Sequelize = new Sequelize({
    //     database: 'test.db',
    //     dialect: 'sqlite',
    //     storage: '../../database.sqlite',
    //     logging: console.log
    // });
    
    const app = express();
    const port = 3001;
    
    app.get('/api/hello', (req: Request, res: Response) => {
      res.json({ message: 'Hello from the backend!' });
    });
    
    sequelize.authenticate().then(() => {
      console.log('Connection to database has been established successfully.');
      sequelize.sync();
      app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
      });
   }).catch((error) => {
      console.error('Unable to connect to the database: ', error);
   });
