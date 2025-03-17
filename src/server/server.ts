    // server/server.ts
    import express, { Request, Response } from 'express';
    import { sequelize } from './src/infrastructure/database';

    const app = express();
    const port = 3001;
    
    app.get('/api/hello', (req: Request, res: Response) => {
      res.json({ message: 'Hello from the backend!' });
    });
    
    app.listen(port, () => {
      sequelize
      console.log(sequelize);
      console.log(`Server listening on port ${port}`);
    });
