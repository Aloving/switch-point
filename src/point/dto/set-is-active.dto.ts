import { IsBoolean, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SetIsActiveDto {
  @ApiProperty({
    description: 'Boolean flag to set',
    default: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  readonly isActive: boolean;

  @ApiProperty({
    description: 'Id of point to set flag',
  })
  @IsNotEmpty()
  readonly pointId: string;

  @ApiProperty({
    description: 'Group id of updated point',
  })
  @IsNotEmpty()
  readonly pointGroupId: string;
}
