import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsController } from './jobs/jobs.controller';
import { ScrappersController } from './scrappers/scrappers.controller';
import { ScrappersService } from './scrappers/scrappers.service';
import { JobsService } from './jobs/jobs.service';

@Module({
  imports: [],
  controllers: [AppController, JobsController, ScrappersController],
  providers: [AppService, ScrappersService, JobsService],
})
export class AppModule {}
