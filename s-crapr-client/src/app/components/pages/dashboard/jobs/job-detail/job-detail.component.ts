import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { JobsService } from 'src/app/services/jobs/jobs.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  job;
  id;


  constructor(private service: JobsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.service.findOne(this.id).pipe(take(1)).subscribe(data => {
        this.job = data;
      });
    });
  }

  remove() {
    this.service.remove(this.id).subscribe(res => {
      this.router.navigate(['dashboard/jobs']);
    })
  }
}
