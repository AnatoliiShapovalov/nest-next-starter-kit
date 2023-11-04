import { Controller, Get } from '@nestjs/common';

@Controller('api/test')
export class TestController {
  @Get()
  async Test() {
    return 'Congratulations, it works! (at least backend does)';
  }
}
