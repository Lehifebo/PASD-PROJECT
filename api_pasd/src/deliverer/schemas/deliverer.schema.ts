import * as mongoose from 'mongoose';

export const DelivererSchema = new mongoose.Schema({
    Name: String,
    Address: String,
    Id: Number
});
