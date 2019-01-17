import { Indicator } from './../models/indicator';
import { Company } from './../models/company';

export class CompanyController {

    public add(req, res) {
        if (req.user.role == "admin") {
            let company = new Company(req.body);

            company.save((err, company) => {
                if (err) {
                    res.send(err);
                }
                res.json(company);
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    }

    public getAll(req, res) {
        Company.find({}, (err, company) => {
            if (err) {
                res.send(err);
            }
            res.json(company);
        });
    }

    public getByKey(req, res) {
        Company.findOne({ key: req.params.id }, (err, company) => {
            if (err) {
                res.send(err);
            }
            res.json(company);
        });
    }

    public getIndicators(req, res) {
        Indicator.find({ companyKey: req.params.id }, (err, indicators) => {
            if (err) {
                res.send(err);
            }
            res.json(indicators);
        });
    }

    public getLatestIndicator(req, res) {
        Indicator.findOne({ companyKey: req.params.id }).sort('-periodEndDate').exec((err, indicator) => {
            if (err) {
                res.send(err);
            }
            res.json(indicator);
        });
    }

    public update(req, res) {
        if (req.user.role == "admin") {
            Company.findOneAndUpdate({ key: req.params.id }, req.body, { new: true }, (err, company) => {
                if (err) {
                    res.send(err);
                }
                res.json(company);
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    }

    public delete(req, res) {
        if (req.user.role == "admin") {
            Company.remove({ key: req.params.id }, (err, company) => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted company!' });
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    }
}