import { IsNotEmpty, Length } from 'class-validator';
import { Point } from '../../point/entities';

export class CreatePointGroupDto {
  @IsNotEmpty()
  @Length(1, 50)
  readonly name: string;

  readonly description: string;

  readonly points: Omit<Point, 'id'>[];
}
