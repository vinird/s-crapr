import { Controller, Get } from '@nestjs/common';

@Controller('scrappers')
export class ScrappersController {

    @Get()
    getScrappers(): string {
        return 'Scrapper get!'
    }
}
