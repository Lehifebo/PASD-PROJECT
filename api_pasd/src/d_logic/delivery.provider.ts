import { Mongoose } from 'mongoose';
import { DeliverySchema } from './schemas/delivery.schema';

export const deliveryProvider = [
  {
    provide: 'DELIVERY_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Deliveries', DeliverySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
