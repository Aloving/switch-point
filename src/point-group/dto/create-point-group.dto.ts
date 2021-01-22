import { IsNotEmpty, Length } from 'class-validator';
import { Point } from '../../point/entities';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePointGroupDto {
  @ApiProperty({
    description: 'Name of created point-group',
    default: '',
  })
  @IsNotEmpty()
  @Length(1, 50)
  readonly name: string;

  @ApiProperty({
    description: 'Description of created point-group',
  })
  readonly description: string;

  @ApiProperty({
    description: 'Description of created point-group',
    type: Point,
    isArray: true,
  })
  readonly points: Point[];
}
