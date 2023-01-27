import { Mongoose } from 'mongoose';
import { OrderSchema } from './schemas/package.schema';

export const packageProvider = [
  {
    provide: 'PACKAGE_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Package', OrderSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
