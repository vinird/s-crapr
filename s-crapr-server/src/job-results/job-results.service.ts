import { InjectRepository } from '@nestjs/typeorm';
import { JobResult } from './job-result.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class JobResultsService {
    constructor(
        @InjectRepository(JobResult)
        private jobResultRepository: Repository<JobResult>,
    ) { }

    findAll(): Promise<JobResult[]> {
        return this.jobResultRepository.find();
    }

    findOne(id: string): Promise<JobResult> {
        return this.jobResultRepository.findOne(id);
    }

    create(scrapper: JobResult): Promise<JobResult> {
        return this.jobResultRepository.save(scrapper)
    }

    async update(id: string, scrapper: JobResult): Promise<JobResult> {
        await this.jobResultRepository.update({ id }, scrapper);
        return this.jobResultRepository.findOne(id);
    }

    async remove(id: string): Promise<JobResult> {
        await this.jobResultRepository.delete(id);
        return this.jobResultRepository.findOne(id);
    }
}

