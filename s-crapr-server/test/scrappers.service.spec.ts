import { Test, TestingModule } from '@nestjs/testing';
import { ScrappersService } from '../src/scrappers/scrappers.service';

describe('ScrappersService', () => {
  let service: ScrappersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScrappersService],
    }).compile();

    service = module.get<ScrappersService>(ScrappersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
