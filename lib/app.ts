import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/routes";
import * as mongoose from "mongoose";
import * as cors from 'cors';

class App {

    public app: express.Application;
    public routes: Routes = new Routes();
    private password = encodeURIComponent("ZgV2B3V0auZQFlSaBKaSCoJqK6QWN8Z475U0Uv7l5pICivo9YkzASBkKF1GEArMDBxfmXvNXnKFEF1ZZNv2dAg==");
    public mongoUrl: string = "mongodb://it-e:" + this.password + "@it-e.documents.azure.com:10255/companyanalysis?ssl=true&replicaSet=globaldb";
    
    constructor() {
        this.app = express();
        this.config();        
        this.routes.setup(this.app);
        this.mongoSetup();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.set("jwtSecret", "lksdjfkhnsdf328hkas823nasdd");
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

}

export default new App().app;

