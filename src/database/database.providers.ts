import { createConnection } from 'typeorm';

import { Provider as ProviderEnum } from '../enums';

import { IEnv } from '../env';
import { Point } from '../point/entities';
import { PointGroup } from '../point-group/entities';

export const databaseProviders = [
  {
    provide: ProviderEnum.DatabaseConnection,
    useFactory: async (env: IEnv) =>
      await createConnection({
        type: 'mysql',
        host: env.DB_HOST,
        port: env.DB_PORT,
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE,
        entities: [Point, PointGroup],
        synchronize: true,
      }),
    inject: [ProviderEnum.Env],
  },
];
