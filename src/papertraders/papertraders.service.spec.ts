import { Test, TestingModule } from '@nestjs/testing';
import { PaperTradersService } from './papertraders.service';

describe('PaperTradersService', () => {
  let service: PaperTradersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaperTradersService],
    }).compile();

    service = module.get<PaperTradersService>(PaperTradersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
