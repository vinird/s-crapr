import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { JobsService } from 'src/app/services/jobs/jobs.service';
import { ScrappersService } from 'src/app/services/scrappers/scrappers.service';
import { JobFormValue } from './job.interfaces'
import { Job } from 's-crapr-shared/src/interfaces/job.interface';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  scrappers$;
  context: 'creating' | 'updating';
  savingJob = false;
  job = {};
  id;

  jobForm = new FormGroup({
    id: new FormControl(''),
    schedule: new FormGroup({
      minute: new FormControl('', [Validators.max(59), Validators.pattern(/^[0-9]+$|^[\*]{1}$/)]),
      hour: new FormControl('', [Validators.max(23), Validators.pattern(/^[0-9]+$|^[\*]{1}$/)]),
      dayOfMonth: new FormControl('', [Validators.max(31), Validators.pattern(/^[0-9]+$|^[\*]{1}$/)]),
      month: new FormControl('', [Validators.max(12), Validators.pattern(/^[0-9]+$|^[\*]{1}$/)]),
      dayOfWeek: new FormControl('', [Validators.max(7), Validators.pattern(/^[0-9]+$|^[\*]{1}$/)]),
    }),
    scrapperId: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    enabled: new FormControl(false),
  });

  constructor(private service: JobsService, private scrapperService: ScrappersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.scrappers$ = this.scrapperService.findAllReduced();

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id) {
        this.setContext('updating');
        this.service.findOne(this.id).pipe(take(1)).subscribe((data: Job) => {
          const values = this.getFormValues(data);
          this.jobForm.setValue(values);
          this.job = data;
        });
      } else {
        this.setContext('creating');
      }
    });
  }

  getFormValuesString() {
    return JSON.stringify(this.jobForm.value, null, 4)
  }

  setContext(context: 'updating' | 'creating') {
    this.context = context;
  }

  getFormValues({ id, scrapperId, description, minute, hour, dayOfMonth, month, dayOfWeek, enabled }: Job): JobFormValue {
    const schedule = {
      minute,
      hour,
      dayOfMonth,
      month,
      dayOfWeek
    }
    return {
      id,
      scrapperId,
      description,
      schedule,
      enabled
    };
  }

  getJobFromForm({ id, scrapperId, description, schedule: { minute, hour, dayOfMonth, month, dayOfWeek }, enabled }: JobFormValue): Job | object {
    return {
      id,
      scrapperId,
      description,
      minute,
      hour,
      dayOfMonth,
      month,
      dayOfWeek,
      enabled
    }
  }

  onSubmit() {
    this.savingJob = true;
    const body = this.getJobFromForm(this.jobForm.value);
    setTimeout(() => {
      console.log(body)
      if (this.context === 'creating') {
        this.service.create(body).subscribe(res => {
          this.savingJob = false;
          this.router.navigate(['dashboard/jobs']);
        })
      } else if (this.context === 'updating') {
        this.service.update(this.id, body).subscribe(res => {
          this.savingJob = false;
          this.router.navigate(['dashboard/jobs']);
        })
      }
    }, 1000);
  }
}
