import { Injectable } from '@nestjs/common';

@Injectable()
export class productService {
  getProduct() : string[]{
    return ['article1','article2']
  }
}