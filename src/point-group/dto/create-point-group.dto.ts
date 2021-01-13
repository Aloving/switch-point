import { IsNotEmpty, Length } from 'class-validator';

export class CreatePointGroupDto {
  @IsNotEmpty()
  @Length(1, 50)
  readonly name: string;

  readonly description: string;
}
