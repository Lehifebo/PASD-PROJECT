import { Document } from 'mongoose';

export interface Package extends Document {
    send_date: Date
    x_in_mm: number
    y_in_mm: number
    z_in_mm: number
    is_breakable: boolean
    is_perishable: boolean
    id: number
}
