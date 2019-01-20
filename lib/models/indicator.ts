import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const IndicatorSchema = new Schema({
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

export const Indicator = mongoose.model("Indicator", IndicatorSchema);

Indicator.calculate = function(indicator) {
    console.log(indicator);
}
