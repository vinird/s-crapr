import { Test, TestingModule } from '@nestjs/testing';
import { JobResultController } from '../src/job-result/job-result.controller';

describe('JobResultController', () => {
  let controller: JobResultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobResultController],
    }).compile();

    controller = module.get<JobResultController>(JobResultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
