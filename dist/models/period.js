"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var PeriodSchema = new Schema({
    key: { type: String, required: 'Key is required' },
    name: { type: String, required: 'Name is required' },
    startDate: { type: Date, required: 'StartDate is required' },
    endDate: { type: Date, required: 'EndDate is required' },
}, { _id: false });
exports.Period = mongoose.model("Period", PeriodSchema);
//# sourceMappingURL=period.js.map