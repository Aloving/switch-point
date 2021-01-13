import { Module } from '@nestjs/common';

import { Service } from '../enums';
import { DatabaseModule } from '../database';
import { PointGroupService } from './point-group.service';
import { PointGroupController } from './point-group.controller';
import { pointGroupProviders } from './point-group.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PointGroupController],
  providers: [
    ...pointGroupProviders,
    {
      provide: Service.PointGroupService,
      useClass: PointGroupService,
    },
  ],
})
export class PointGroupModule {}
