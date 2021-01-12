import { Module } from '@nestjs/common';

import { PointService } from './point.service';
import { PointController } from './point.controller';
import { pointProviders } from './point.providers';
import { DatabaseModule } from '../database';
import { Service } from '../enums';

@Module({
  imports: [DatabaseModule],
  controllers: [PointController],
  providers: [
    ...pointProviders,
    {
      provide: Service.PointService,
      useClass: PointService,
    },
  ],
})
export class PointModule {}
