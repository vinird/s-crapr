import { Module } from '@nestjs/common';

// Modules
import { TypeOrmModule } from '@nestjs/typeorm';

// Controllers
import { ScrappersController } from './scrappers.controller';

// Services
import { ScrappersService } from './scrappers.service';

// Entities
import { Scrapper } from './scrapper.entity';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            Scrapper
        ]),
    ],
    controllers: [
        ScrappersController
    ],
    providers: [
        ScrappersService
    ]
})
export class ScrappersModule { }
