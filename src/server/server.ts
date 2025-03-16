    // server/server.ts
    import express, { Request, Response } from 'express';
    
    const app = express();
    const port = 3001;
    
    app.get('/api/hello', (req: Request, res: Response) => {
      res.json({ message: 'Hello from the backend!' });
    });
    
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
