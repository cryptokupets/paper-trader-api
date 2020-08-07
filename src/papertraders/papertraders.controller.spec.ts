import { Test, TestingModule } from '@nestjs/testing';
import { PaperTradersController } from './papertraders.controller';

describe('PaperTraders Controller', () => {
  let controller: PaperTradersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaperTradersController],
    }).compile();

    controller = module.get<PaperTradersController>(PaperTradersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
