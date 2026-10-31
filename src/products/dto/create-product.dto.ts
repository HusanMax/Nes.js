import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  title!: string;

  @IsNumber()
  @Min(1)
  @Max(100000)
  price!: number;
}
