"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var period_1 = require("./../models/period");
var PeriodController = /** @class */ (function () {
    function PeriodController() {
    }
    PeriodController.prototype.add = function (req, res) {
        if (req.user.role == "admin") {
            var peroid = new period_1.Period(req.body);
            peroid.save(function (err, peroid) {
                if (err) {
                    res.send(err);
                }
                res.json(peroid);
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    };
    PeriodController.prototype.getAll = function (req, res) {
        period_1.Period.find({}, function (err, periods) {
            if (err) {
                res.send(err);
            }
            res.json(periods);
        });
    };
    PeriodController.prototype.getByKey = function (req, res) {
        period_1.Period.findOne({ key: req.params.id }, function (err, period) {
            if (err) {
                res.send(err);
            }
            res.json(period);
        });
    };
    PeriodController.prototype.update = function (req, res) {
        if (req.user.role == "admin") {
            period_1.Period.findOneAndUpdate({ key: req.params.id }, req.body, { new: true }, function (err, period) {
                if (err) {
                    res.send(err);
                }
                res.json(period);
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    };
    PeriodController.prototype.delete = function (req, res) {
        if (req.user.role == "admin") {
            period_1.Period.remove({ key: req.params.id }, function (err, period) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted period!' });
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    };
    return PeriodController;
}());
exports.PeriodController = PeriodController;
//# sourceMappingURL=periodController.js.map