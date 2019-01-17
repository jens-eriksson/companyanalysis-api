"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var CompanySchema = new Schema({
    key: { type: String, required: 'Key is required' },
    name: { type: String, required: 'Name is required' },
}, { _id: false });
exports.Company = mongoose.model("Company", CompanySchema);
//# sourceMappingURL=company.js.map