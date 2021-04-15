import { Module } from '@nestjs/common';

// Modules
import { TypeOrmModule } from '@nestjs/typeorm';

// Controllers
import { JobsController } from './jobs.controller';

// Services
import { JobsService } from './jobs.service';
import { JobResultsService } from '../job-results/job-results.service';
import { Scheduler } from './scheduler';

// Entities
import { Job } from './job.entity';
import { JobResult } from '../job-results/job-result.entity'
import { Scrapper } from '../scrappers/scrapper.entity'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            JobResult,
            Scrapper,
            Job
        ]),
    ],
    controllers: [
        JobsController
    ],
    providers: [
        JobResultsService,
        JobsService,
        Scheduler
    ]
})
export class JobsModule { }
