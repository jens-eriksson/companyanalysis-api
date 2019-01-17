import { CompanyController } from './../controllers/companyController';
import { PeriodController } from './../controllers/periodController';
import { IndicatorController } from './../controllers/indicatorController';
import { AuthController } from './../controllers/authController';
import * as jwt from 'express-jwt';

export class Routes { 
    public comapnyController: CompanyController = new CompanyController();
    public periodController: PeriodController = new PeriodController();
    public indicatorController: IndicatorController = new IndicatorController();
    public authController: AuthController = new AuthController();

    public setup(app): void {
        // /companies
        app.route('/companies')
        .get(this.comapnyController.getAll)   
        .post(jwt({secret: app.get("jwtSecret")}), this.comapnyController.add);

        app.route('/companies/:id')
        .get(this.comapnyController.getByKey)
        .put(jwt({secret: app.get("jwtSecret")}), this.comapnyController.update)
        .delete(jwt({secret: app.get("jwtSecret")}), this.comapnyController.delete)

        app.route('/companies/:id/indicators')
        .get(this.comapnyController.getIndicators);

        app.route('/companies/:id/latest-indicator')
        .get(this.comapnyController.getLatestIndicator);

        // /periods
        app.route('/periods')
        .get(this.periodController.getAll)
        .post(jwt({secret: app.get("jwtSecret")}), this.periodController.add);

        app.route('/periods/:id')
        .get(this.periodController.getByKey)
        .put(jwt({secret: app.get("jwtSecret")}), this.periodController.update)
        .delete(jwt({secret: app.get("jwtSecret")}), this.periodController.delete);

        // /indicators
        app.route('/indicators')
        .get(this.indicatorController.getAll)
        .post(jwt({secret: app.get("jwtSecret")}), this.indicatorController.add);

        app.route('/indicators/:id')
        .get(this.indicatorController.getByKey)
        .put(jwt({secret: app.get("jwtSecret")}), this.indicatorController.update)
        .delete(jwt({secret: app.get("jwtSecret")}), this.indicatorController.delete);

        // /auth
         app.route('/auth/google')
        .get(this.authController.googleSignIn);

        app.route('/auth/facebook')
        .get(this.authController.facebookSignIn);
    }
}