import { createConnection } from 'typeorm';

import { Provider } from '../enums';

export const databaseProviders = [
  {
    provide: Provider.DatabaseConnection,
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'switch-point',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
