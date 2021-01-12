import { Connection } from 'typeorm';

import { Provider, Repository } from '../enums';
import { Point } from './entities';

export const pointProviders = [
  {
    provide: Repository.PointRepository,
    useFactory: (connection: Connection) => connection.getRepository(Point),
    inject: [Provider.DatabaseConnection],
  },
];
