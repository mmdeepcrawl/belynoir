import express, { Application } from 'express';
import cors from 'cors';
import authRoutes from '../routes/auth';
import usersRoutes from '../routes/users';

class Server {

    private app: Application;
    private readonly port: string;
    private apiPaths = {
        auth: '/api/auth',
        users: '/api/users'
    }

    constructor() {
        this.app = express();

        this.port = process.env.PORT || '8000';

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());

        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.apiPaths.auth, authRoutes);
        this.app.use(this.apiPaths.users, usersRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running in port:', this.port);
        })
    }
}

export default Server;
