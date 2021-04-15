import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { JobsService } from '../../../../services/jobs/jobs.service'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs$: Observable<object>;

  constructor(private service: JobsService) { }

  ngOnInit(): void {
    this.jobs$ = this.service.findAll();
  }

}
