import { Indicator } from './../models/indicator';

export class IndicatorController {

    public add(req, res) {
        if (req.user.role == "admin") {
            let indicator = new Indicator(req.body);
            indicator.key = indicator.companyKey + "-" + indicator.peroidKey;
            indicator.save((err, indicator) => {
                if (err) {
                    res.send(err);
                }
                res.json(indicator);
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    }

    public getAll(req, res) {
        Indicator.find({}).sort('-periodEndDate').exec((err, indicator) => {
            if (err) {
                res.send(err);
            }
            res.json(indicator);
        });
    }

    public getByKey(req, res) {
        Indicator.findOne({ key: req.params.id }).lean().exec((err, indicator) => {
            if (err) {
                res.send(err);
            }
            res.json(indicator);
        });
    }

    public update(req, res) {
        if (req.user.role == "admin") {
            Indicator.findOneAndUpdate({ key: req.params.id }, req.body, { new: true }, (err, indicator) => {
                if (err) {
                    res.send(err);
                }
                res.json(indicator);
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    }

    public delete(req, res) {
        if (req.user.role == "admin") {
            Indicator.remove({ key: req.params.id }, (err, indicator) => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted indicator!' });
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    }
}