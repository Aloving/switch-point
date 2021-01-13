import { Module } from '@nestjs/common';

import { Service } from '../enums';
import { PointGroupService } from './point-group.service';
import { PointGroupController } from './point-group.controller';

@Module({
  controllers: [PointGroupController],
  providers: [
    {
      provide: Service.PointGroupService,
      useClass: PointGroupService,
    },
  ],
})
export class PointGroupModule {}
