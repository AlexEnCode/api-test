import { Controller, Get } from '@nestjs/common';
import { productService } from './product.service';

@Controller('Product')
export class ProductController {
  constructor(private readonly productService :  productService) {}
  @Get('productName')
 
 getProductName(): string[] 
 { return this.productService.getProduct()}}  