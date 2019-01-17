import { Period } from './../models/period';

export class PeriodController {

    public add(req, res) {
        if (req.user.role == "admin") {
            let peroid = new Period(req.body);

            peroid.save((err, peroid) => {
                if (err) {
                    res.send(err);
                }
                res.json(peroid);
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    }

    public getAll(req, res) {
        Period.find({}, (err, periods) => {
            if (err) {
                res.send(err);
            }
            res.json(periods);
        });
    }

    public getByKey(req, res) {
        Period.findOne({ key: req.params.id }, (err, period) => {
            if (err) {
                res.send(err);
            }
            res.json(period);
        });
    }

    public update(req, res) {
        if (req.user.role == "admin") {
            Period.findOneAndUpdate({ key: req.params.id }, req.body, { new: true }, (err, period) => {
                if (err) {
                    res.send(err);
                }
                res.json(period);
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }
    }

    public delete(req, res) {
        if (req.user.role == "admin") {
            Period.remove({ key: req.params.id }, (err, period) => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted period!' });
            });
        }
        else {
            res.status(401).send("Unauthorizd");
        }

    }

}