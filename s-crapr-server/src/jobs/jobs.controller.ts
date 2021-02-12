import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './job.entity';

@Controller('jobs')
export class JobsController {
    constructor(private service: JobsService){}

    @Get()
    findAll(): Promise<void | Job[]> {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Job> {
        return this.service.findOne(id);
    }

    @Post()
    create(@Body() job: Job): Promise<Job> {
        return this.service.create(job);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() job: Job): Promise<Job> {
        return this.service.update(id, job);
    }

    @Delete(':id')
    remove(@Param('id') id: string) : Promise<Job | void> {
        return this.service.remove(id);
    }
}
