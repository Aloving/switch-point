import { createConnection } from 'typeorm';

import { Provider } from '../enums';

import { Point } from '../point/entities';
import { PointGroup } from '../point-group/entities';

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
        entities: [Point, PointGroup],
        synchronize: true,
      }),
  },
];
