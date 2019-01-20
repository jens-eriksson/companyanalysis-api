"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var indicator_1 = require("./../models/indicator");
var IndicatorController = /** @class */ (function () {
    function IndicatorController() {
    }
    IndicatorController.prototype.add = function (req, res) {
        if (req.user.role == "admin") {
            var indicator = new indicator_1.Indicator(req.body);
            indicator.key = indicator.companyKey + "-" + indicator.periodKey;
            indicator.save(function (err, indicator) {
                if (err) {
                    res.send(err);
                }
                res.json(indicator);
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    };
    IndicatorController.prototype.getAll = function (req, res) {
        indicator_1.Indicator.find({}).sort('-periodEndDate').exec(function (err, indicators) {
            if (err) {
                res.send(err);
            }
            res.json(indicators);
        });
    };
    IndicatorController.prototype.getByKey = function (req, res) {
        indicator_1.Indicator.findOne({ key: req.params.id }).lean().exec(function (err, indicator) {
            if (err) {
                res.send(err);
            }
            indicator_1.Indicator.calculate(indicator);
            res.json(indicator);
        });
    };
    IndicatorController.prototype.update = function (req, res) {
        if (req.user.role == "admin") {
            indicator_1.Indicator.findOneAndUpdate({ key: req.params.id }, req.body, { new: true }, function (err, indicator) {
                if (err) {
                    res.send(err);
                }
                res.json(indicator);
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    };
    IndicatorController.prototype.delete = function (req, res) {
        if (req.user.role == "admin") {
            indicator_1.Indicator.remove({ key: req.params.id }, function (err, indicator) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted indicator!' });
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    };
    return IndicatorController;
}());
exports.IndicatorController = IndicatorController;
//# sourceMappingURL=indicatorController.js.map