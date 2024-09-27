import { IsIn, IsInt, IsNotEmpty } from 'class-validator';

export class RatePokemonDto {
  @IsNotEmpty()
  id: number;

  @IsInt()
  @IsIn([1, 2, 3, 4, 5])
  punctuation: number;
}
