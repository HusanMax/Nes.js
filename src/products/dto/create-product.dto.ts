<<<<<<< HEAD
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
=======
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
>>>>>>> d726fabd2dd1ffcb9c80156845a98d62fbed2548

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
<<<<<<< HEAD
  @Length(3, 30)
  title!: string;

  @IsNumber()
  @Min(1)
  @Max(100000)
=======
  title!: string;

  @IsNumber()
  @IsPositive()
>>>>>>> d726fabd2dd1ffcb9c80156845a98d62fbed2548
  price!: number;
}
