import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb+srv://team18:BEST@pasd.wewa3ff.mongodb.net/DATA'
      ),
  },
];
