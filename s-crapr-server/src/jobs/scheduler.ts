import { Injectable } from '@nestjs/common';
import { JobResultsService } from '../job-results/job-results.service';
const schedule = require('node-schedule');
import { Job } from './job.entity';

@Injectable()
export class Scheduler {

    private jobs = [];

    constructor(private jobResultService: JobResultsService) {
    }

    add(job: Job) {
        if (job?.id) {
            const jobResultService = this.jobResultService;
            const scheduleJob = schedule.scheduleJob('* * * * *', function () {
                console.log('Time for tea!');
                jobResultService.create(job);
            });
            jobResultService.create(job);

            if (!job.enabled) {
                // scheduleJob.cancel();
            }

            this.jobs.push({ ...job, scheduleJob });
        }
    }

    update(job: Job) {
        if (job?.UUID) {
            const index = this.jobs.findIndex((item: Job) => item.id === job.id);
            this.jobs[index] = job;
        }
    }

    delete(id) {
        const index = this.jobs.findIndex((item: Job) => item.id === id);
        this.jobs.splice(index, 1)
    }

    list() {
        return this.jobs;
    }
}