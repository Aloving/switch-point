import { Connection } from 'typeorm';

import { Provider, Repository } from '../enums';
import { PointGroup } from './entities';

export const pointGroupProviders = [
  {
    provide: Repository.PointGroupRepository,
    useFactory: (connection: Connection) =>
      connection.getRepository(PointGroup),
    inject: [Provider.DatabaseConnection],
  },
];
