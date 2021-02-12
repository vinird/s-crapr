import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { JobResultsService } from './job-results.service';
import { JobResult } from './job-result.entity';

@Controller('job-result')
export class JobResultsController {
    constructor(private service: JobResultsService){}

    @Get()
    findAll(): Promise<void | JobResult[]> {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<JobResult> {
        return this.service.findOne(id);
    }

    @Post()
    create(@Body() job: JobResult): Promise<JobResult> {
        return this.service.create(job);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() job: JobResult): Promise<JobResult> {
        return this.service.update(id, job);
    }

    @Delete(':id')
    remove(@Param('id') id: string) : Promise<JobResult | void> {
        return this.service.remove(id);
    }
}
