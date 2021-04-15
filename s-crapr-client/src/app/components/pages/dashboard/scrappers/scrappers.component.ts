import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScrappersService } from '../../../../services/scrappers/scrappers.service'

@Component({
  selector: 'app-scrappers',
  templateUrl: './scrappers.component.html',
  styleUrls: ['./scrappers.component.scss']
})
export class ScrappersComponent implements OnInit {

  scrappers$: Observable<Object>;

  constructor(private service: ScrappersService) { }

  ngOnInit(): void {
    this.scrappers$ = this.service.findAll();
  }

}
