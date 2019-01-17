"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
var mongoose = require("mongoose");
var cors = require("cors");
var App = /** @class */ (function () {
    function App() {
        this.routes = new routes_1.Routes();
        this.password = encodeURIComponent("ZgV2B3V0auZQFlSaBKaSCoJqK6QWN8Z475U0Uv7l5pICivo9YkzASBkKF1GEArMDBxfmXvNXnKFEF1ZZNv2dAg==");
        this.mongoUrl = "mongodb://it-e:" + this.password + "@it-e.documents.azure.com:10255/companyanalysis?ssl=true&replicaSet=globaldb";
        this.app = express();
        this.config();
        this.routes.setup(this.app);
        this.mongoSetup();
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.set("jwtSecret", "lksdjfkhnsdf328hkas823nasdd");
    };
    App.prototype.mongoSetup = function () {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map