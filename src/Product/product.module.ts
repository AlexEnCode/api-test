import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { productService } from './product.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [productService],
})
export class productModule {}
