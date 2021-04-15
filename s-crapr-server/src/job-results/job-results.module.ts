import { Module } from "@nestjs/common";

// Modules
import { TypeOrmModule } from "@nestjs/typeorm";

// Controllers
import { JobResultsController } from "./job-results.controller";

// Services
import { JobResultsService } from "./job-results.service";

// Entities
import { JobResult } from "./job-result.entity";
import { Scrapper } from "../scrappers/scrapper.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([
            JobResult,
            Scrapper
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
