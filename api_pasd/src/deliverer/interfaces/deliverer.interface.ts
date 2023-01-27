import { Document } from 'mongoose';

export interface Deliverer extends Document {
    name: string
    address: string
    id:number
}