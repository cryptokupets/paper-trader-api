import { Test, TestingModule } from '@nestjs/testing';
import { PaperTradersController } from './papertraders.controller';
import { PaperTradersService } from './papertraders.service';

describe('PaperTraders Controller', () => {
  let controller: PaperTradersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaperTradersController],
      providers: [PaperTradersService],
    }).compile();

    controller = module.get<PaperTradersController>(PaperTradersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
