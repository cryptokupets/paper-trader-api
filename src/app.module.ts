import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { PaperTradersController } from './papertraders/papertraders.controller';
import { PaperTradersService } from './papertraders/papertraders.service';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    CatsController,
    PaperTradersController,
    ProductsController,
  ],
  providers: [AppService, ProductsService, PaperTradersService],
})
export class AppModule {}
