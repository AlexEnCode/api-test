import { Controller, Get } from '@nestjs/common';
import { AppService, productService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sayGoodbye')
  sayGoodbye(): string {
    return this.appService.logicToSayGoodbye();
  };
}
@Controller('Product')
export class ProductController {
  constructor(private readonly productService :  productService) {}
  @Get('prudctName')
  getProductName(): string[] {
    return this.productService.getProduct()
  }
}  