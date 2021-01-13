import { Module } from '@nestjs/common';

import { PointModule } from './point';
import { DatabaseModule } from './database';
import { PointGroupModule } from './point-group';

@Module({
  imports: [PointModule, DatabaseModule, PointGroupModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
