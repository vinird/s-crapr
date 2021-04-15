import { InjectRepository } from '@nestjs/typeorm';
import { JobResult } from './job-result.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { execute } from '../scrappers/handlers/scrapper'
import { processData } from '../scrappers/handlers/data-handler'
import { Scrapper } from 'src/scrappers/scrapper.entity';
import { Job } from 'src/jobs/job.entity';

@Injectable()
export class JobResultsService {
    constructor(
        @InjectRepository(JobResult)
        private jobResultRepository: Repository<JobResult>,
        @InjectRepository(Scrapper)
        private scrapperRepository: Repository<Scrapper>
    ) { }

    findAll(): Promise<JobResult[]> {
        return this.jobResultRepository.find();
    }

    findOne(id: string): Promise<JobResult> {
        return this.jobResultRepository.findOne(id);
    }

    findOneByJobId(id: string): Promise<JobResult[]> {
        return this.jobResultRepository.find({ where: { jobId: id } });
    }

    async create(job: Job) {
        const scrapper = await this.scrapperRepository.findOne(job.scrapperId);
        const html = await execute(scrapper.url);
        const result = processData(html, scrapper.cssSelector, scrapper.outputFormat);
        return this.jobResultRepository.save({
            jobId: job.id,
            scrappingResult: (result || '')
        } as JobResult);

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

