import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PeriodSchema = new Schema({
    key: { type: String, required: 'Key is required' },
    name: { type: String, required: 'Name is required' },
    startDate: { type: Date, required: 'StartDate is required' },
    endDate: { type: Date, required: 'EndDate is required' },
},
{ _id: false});

export const Period = mongoose.model("Period", PeriodSchema);

