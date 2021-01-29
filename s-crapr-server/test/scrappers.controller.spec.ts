import { Test, TestingModule } from '@nestjs/testing';
import { ScrappersController } from '../src/scrappers/scrappers.controller';

describe('ScrappersController', () => {
  let controller: ScrappersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScrappersController],
    }).compile();

    controller = module.get<ScrappersController>(ScrappersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
