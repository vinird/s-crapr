import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Job } from './job.entity';

@Injectable()
export class JobsService {
    constructor(
        @InjectRepository(Job)
        private jobRepository: Repository<Job>,
    ) { }

    findAll(): Promise<Job[]> {
        return this.jobRepository.find();
    }

    findOne(id: string): Promise<Job> {
        return this.jobRepository.findOne(id);
    }

    create(scrapper: Job): Promise<Job> {
        return this.jobRepository.save(scrapper)
    }

    async update(id: string, scrapper: Job): Promise<Job> {
        await this.jobRepository.update({ id }, scrapper);
        return this.jobRepository.findOne(id);
    }

    async remove(id: string): Promise<Job> {
        await this.jobRepository.delete(id);
        return this.jobRepository.findOne(id);
    }
}
