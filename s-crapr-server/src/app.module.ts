import { Module } from '@nestjs/common';

// Modules
import { JobResultsModule } from './job-results/job-results.module';
import { ScrappersModule } from './scrappers/scrappers.module';
import { AppLogsModule } from './app-logs/app-logs.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsModule } from './jobs/jobs.module';
import { AuthModule } from './auth/auth.module';

// Controllers
import { AppController } from './app.controller';

// Services
import { AppService } from './app.service';

// Entities
import { JobResult } from './job-results/job-result.entity';
import { Scrapper } from './scrappers/scrapper.entity';
import { AppLog } from './app-logs/app-log.entity';
import { User } from './users/users.entity'
import { Job } from './jobs/job.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/scrapr-db.db',
      entities: [
        JobResult,
        Scrapper,
        AppLog,
        User,
        Job,
      ],
      synchronize: true,
    }),
    JobResultsModule,
    ScrappersModule,
    AppLogsModule,
    UsersModule,
    JobsModule,
    AuthModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule { }
