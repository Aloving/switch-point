import { IsNotEmpty, Length } from 'class-validator';

export class CreatePointDto {
  @IsNotEmpty()
  @Length(1, 50)
  readonly name: string;

  readonly description: string;
}
