import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePointDto {
  @ApiProperty({
    description: 'The name of created point',
    default: 'testName',
  })
  @IsNotEmpty()
  @Length(1, 50)
  readonly name: string;

  @ApiProperty({
    description: 'An id of group for that point creating',
  })
  @IsNotEmpty()
  readonly pointGroupId: number;
}
