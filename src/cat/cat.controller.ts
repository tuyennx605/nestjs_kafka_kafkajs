import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  getHello() {
    return this.catService.getHello();
  }

  @Get('aaa')
  getHello1() {
    return this.catService.getHello1();
  }
}
