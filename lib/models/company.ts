import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    key: { type: String, required: 'Key is required' },
    name: { type: String, required: 'Name is required' },
});

export const Company = mongoose.model("Company", CompanySchema);