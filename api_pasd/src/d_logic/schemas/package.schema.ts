import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
    send_date: Date,
    x_in_mm: Number,
    y_in_mm: Number,
    z_in_mm: Number,
    is_breakable: Boolean,
    is_perishable: Boolean,
    sender_info: {
      name: String,
      street_and_number: String,
      zipcode: String,
      city: String,
      country: String
    },
    receiver_info: {
      name: String,
      street_and_number: String,
      zipcode: String,
      city: String,
      country: String
    },
    id: Number
});
