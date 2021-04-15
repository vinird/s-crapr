import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-job-item]',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent implements OnInit {

  @Input('job') job;

  constructor() { }

  ngOnInit(): void {
  }

}
