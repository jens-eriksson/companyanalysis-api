"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var indicator_1 = require("./../models/indicator");
var company_1 = require("./../models/company");
var CompanyController = /** @class */ (function () {
    function CompanyController() {
    }
    CompanyController.prototype.add = function (req, res) {
        if (req.user.role == "admin") {
            var company = new company_1.Company(req.body);
            company.save(function (err, company) {
                if (err) {
                    res.send(err);
                }
                res.json(company);
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    };
    CompanyController.prototype.getAll = function (req, res) {
        company_1.Company.find({}, function (err, company) {
            if (err) {
                res.send(err);
            }
            res.json(company);
        });
    };
    CompanyController.prototype.getByKey = function (req, res) {
        company_1.Company.findOne({ key: req.params.id }, function (err, company) {
            if (err) {
                res.send(err);
            }
            res.json(company);
        });
    };
    CompanyController.prototype.getIndicators = function (req, res) {
        indicator_1.Indicator.find({ companyKey: req.params.id }, function (err, indicators) {
            if (err) {
                res.send(err);
            }
            res.json(indicators);
        });
    };
    CompanyController.prototype.getLatestIndicator = function (req, res) {
        indicator_1.Indicator.findOne({ companyKey: req.params.id }).sort('-periodEndDate').exec(function (err, indicator) {
            if (err) {
                res.send(err);
            }
            res.json(indicator);
        });
    };
    CompanyController.prototype.update = function (req, res) {
        if (req.user.role == "admin") {
            company_1.Company.findOneAndUpdate({ key: req.params.id }, req.body, { new: true }, function (err, company) {
                if (err) {
                    res.send(err);
                }
                res.json(company);
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    };
    CompanyController.prototype.delete = function (req, res) {
        if (req.user.role == "admin") {
            company_1.Company.remove({ key: req.params.id }, function (err, company) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted company!' });
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    };
    return CompanyController;
}());
exports.CompanyController = CompanyController;
//# sourceMappingURL=companyController.js.map