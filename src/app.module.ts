import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaperTradersController } from './papertraders/papertraders.controller';
import { PaperTradersService } from './papertraders/papertraders.service';

@Module({
  imports: [],
  controllers: [AppController, PaperTradersController],
  providers: [AppService, PaperTradersService],
})
export class AppModule {}
