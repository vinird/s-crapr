import { Module } from '@nestjs/common';

// Modules
import { TypeOrmModule } from '@nestjs/typeorm';

// Services
import { AppLogsService } from './app-logs.service';

// Entities
import { AppLog } from './app-log.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AppLog
    ]),
],
  providers: [AppLogsService]
})
export class AppLogsModule {}
