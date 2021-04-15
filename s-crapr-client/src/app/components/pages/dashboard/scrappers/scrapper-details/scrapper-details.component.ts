import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ScrappersService } from 'src/app/services/scrappers/scrappers.service';

@Component({
  selector: 'app-scrapper-details',
  templateUrl: './scrapper-details.component.html',
  styleUrls: ['./scrapper-details.component.scss']
})
export class ScrapperDetailsComponent implements OnInit {

  scrapper;
  id;

  constructor(private service: ScrappersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.service.findOne(this.id).pipe(take(1)).subscribe(data => {
        this.scrapper = data;
      });
    });
  }

  remove() {
    this.service.remove(this.id).subscribe(res => {
      this.router.navigate(['dashboard/scrappers']);
    })
  }

}
