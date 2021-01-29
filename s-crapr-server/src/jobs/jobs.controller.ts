import { Controller, Get } from '@nestjs/common';

@Controller('jobs')
export class JobsController {

    @Get()
    getScrappers(): string {
        return 'Jobs get!'
    }
}
