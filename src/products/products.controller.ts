import {
  Body,
  Controller,
<<<<<<< HEAD
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
=======
  Get,
  Param,
  ParseIntPipe,
>>>>>>> d726fabd2dd1ffcb9c80156845a98d62fbed2548
  Post,
} from '@nestjs/common';
import { Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
<<<<<<< HEAD
import { UpdateProductDto } from './dto/update-product.dto';
=======
>>>>>>> d726fabd2dd1ffcb9c80156845a98d62fbed2548
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateProductDto): Promise<Product> {
    return this.productsService.create(dto);
  }
<<<<<<< HEAD

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateProductDto,
  ): Promise<Product> {
    return this.productsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productsService.remove(id);
  }
=======
>>>>>>> d726fabd2dd1ffcb9c80156845a98d62fbed2548
}
