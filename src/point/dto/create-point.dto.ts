import { IsNotEmpty, Length } from 'class-validator';

export class CreatePointDto {
  @IsNotEmpty()
  @Length(1, 50)
  readonly name: string;

  @IsNotEmpty()
  readonly pointGroupId: number;
}
