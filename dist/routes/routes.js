"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var companyController_1 = require("./../controllers/companyController");
var periodController_1 = require("./../controllers/periodController");
var indicatorController_1 = require("./../controllers/indicatorController");
var authController_1 = require("./../controllers/authController");
var jwt = require("express-jwt");
var Routes = /** @class */ (function () {
    function Routes() {
        this.comapnyController = new companyController_1.CompanyController();
        this.periodController = new periodController_1.PeriodController();
        this.indicatorController = new indicatorController_1.IndicatorController();
        this.authController = new authController_1.AuthController();
    }
    Routes.prototype.setup = function (app) {
        // /companies
        app.route('/companies')
            .get(this.comapnyController.getAll)
            .post(jwt({ secret: app.get("jwtSecret") }), this.comapnyController.add);
        app.route('/companies/:id')
            .get(this.comapnyController.getByKey)
            .put(jwt({ secret: app.get("jwtSecret") }), this.comapnyController.update)
            .delete(jwt({ secret: app.get("jwtSecret") }), this.comapnyController.delete);
        app.route('/companies/:id/indicators')
            .get(this.comapnyController.getIndicators);
        app.route('/companies/:id/latest-indicator')
            .get(this.comapnyController.getLatestIndicator);
        // /periods
        app.route('/periods')
            .get(this.periodController.getAll)
            .post(jwt({ secret: app.get("jwtSecret") }), this.periodController.add);
        app.route('/periods/:id')
            .get(this.periodController.getByKey)
            .put(jwt({ secret: app.get("jwtSecret") }), this.periodController.update)
            .delete(jwt({ secret: app.get("jwtSecret") }), this.periodController.delete);
        // /indicators
        app.route('/indicators')
            .get(this.indicatorController.getAll)
            .post(jwt({ secret: app.get("jwtSecret") }), this.indicatorController.add);
        app.route('/indicators/:id')
            .get(this.indicatorController.getByKey)
            .put(jwt({ secret: app.get("jwtSecret") }), this.indicatorController.update)
            .delete(jwt({ secret: app.get("jwtSecret") }), this.indicatorController.delete);
        // /auth
        app.route('/auth/google')
            .get(this.authController.googleSignIn);
        app.route('/auth/facebook')
            .get(this.authController.facebookSignIn);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map