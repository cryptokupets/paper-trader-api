import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { PaperTradersService } from './papertraders.service';
import { PaperTraderDto } from './papertraders.dto';

@Controller('papertraders')
export class PaperTradersController {
  constructor(private paperTradersService: PaperTradersService) {}

  @Get()
  getPaperTraders() {
    return this.paperTradersService.get();
  }

  @Get(':id')
  getProduct(@Param() params) {
    console.log('get a single paper trader', params.id);
    return this.paperTradersService
      .getOne(params.id);
  }

  @Post()
  createPaperTrader(@Body() paperTrader: PaperTraderDto) {
    console.log('create paper trader', paperTrader);
    this.paperTradersService.createPaperTrader(paperTrader);
  }

  @Delete()
  deletePaperTrader(@Body() paperTrader: PaperTraderDto) {
    console.log('delete paper trader', paperTrader.id);
    this.paperTradersService.deletePaperTrader(paperTrader.id);
  }

  @Post(':id/start')
  startPaperTrader(@Param() params) {
    console.log('start paper trader', params.id);
    this.paperTradersService.startPaperTrader(params.id);
  }
}
