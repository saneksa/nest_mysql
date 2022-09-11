import { IsInt, Max, Min } from 'class-validator';

export class CreateUserDto {
  firstName: string;
  secondName: string;

  @IsInt()
  @Min(1)
  @Max(99)
  age: number;
}
