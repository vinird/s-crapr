import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { Scheduler } from './scheduler';

@Injectable()
export class JobsService {
    constructor(
        @InjectRepository(Job)
        private jobRepository: Repository<Job>,
        private scheduler: Scheduler
    ) { }

    findAll(): Promise<Job[]> {
        return this.jobRepository.find();
    }

    findOne(id: string): Promise<Job> {
        return this.jobRepository.findOne(id);
    }

    async create(scrapper: Job): Promise<Job> {
        const job = await this.jobRepository.save(scrapper)
        this.scheduler.add(job);
        return job;
    }

    async update(id: string, scrapper: Job): Promise<Job> {
        await this.jobRepository.update({ id }, scrapper);
        const job = await this.jobRepository.findOne(id)
        this.scheduler.update(job);
        return job;
    }

    async remove(id: string): Promise<Job> {
        await this.jobRepository.delete(id);
        const job = await this.jobRepository.findOne(id)
        this.scheduler.delete(job);
        console.log(this.scheduler.list())
        return job;
    }
}
