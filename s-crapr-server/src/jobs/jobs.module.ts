import { Module } from '@nestjs/common';

// Modules
import { TypeOrmModule } from '@nestjs/typeorm';

// Controllers
import { JobsController } from './jobs.controller';

// Services
import { JobsService } from './jobs.service';

// Entities
import { Job } from './job.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Job
        ]),
    ],
    controllers: [
        JobsController
    ],
    providers: [
        JobsService
    ]
})
export class JobsModule { }
