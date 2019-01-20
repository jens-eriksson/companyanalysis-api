"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var IndicatorSchema = new Schema({
    key: String,
    periodKey: { type: String, required: 'periodKey is required' },
    companyKey: { type: String, required: 'companyKey is required' },
    revenue: { type: Number, required: 'revenue is required' },
    netIncome: { type: Number, required: 'netIncome is required' },
    assets: { type: Number, required: 'assets is required' },
    equity: { type: Number, required: 'equity is required' },
    stockQuote: Number,
    numberOfShares: Number,
    profitMargin: Number,
    solidity: Number,
    marketCap: Number,
    netIncomeTTM: Number,
    revenueTTM: Number,
    profitMarginTTM: Number,
    peTTM: Number,
    returnOnAssetsTTM: Number,
    returnOnEquityTTM: Number,
    equtiyGrowthTTM: Number,
    netIncomeGrowthTTM: Number,
    revenueGrowthTTM: Number,
    investmentGradeTTM: Number,
    periodEndDate: Date
});
exports.Indicator = mongoose.model("Indicator", IndicatorSchema);
exports.Indicator.calculate = function (indicator) {
    console.log(indicator);
};
//# sourceMappingURL=indicator.js.map