import { Module } from "@nestjs/common";

// Modules
import { TypeOrmModule } from "@nestjs/typeorm";

// Controllers
import { JobResultsController } from "./job-results.controller";

// Services
import { JobResultsService } from "./job-results.service";

// Entities
import { JobResult } from "./job-result.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([
            JobResult
        ]),
    ],
    controllers: [
        JobResultsController
    ],
    providers: [
        JobResultsService
    ]
})
export class JobResultsModule { }
