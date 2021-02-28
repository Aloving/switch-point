import { Module } from '@nestjs/common';

import { PointModule } from './point';
import { DatabaseModule } from './database';
import { PointGroupModule } from './point-group';
import { EnvModule } from './env';

@Module({
  imports: [PointModule, DatabaseModule, PointGroupModule, EnvModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
