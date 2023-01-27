import { Mongoose } from 'mongoose';
import { DelivererSchema } from './schemas/deliverer.schema';

export const delivererProvider = [
  {
    provide: 'DELIVERER_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Deliverer', DelivererSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];