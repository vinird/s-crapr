import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { ScrappersService } from 'src/app/services/scrappers/scrappers.service';
import { ScrapperFormValue } from './scrapper.interfaces';

@Component({
  selector: 'app-scrapper',
  templateUrl: './scrapper.component.html',
  styleUrls: ['./scrapper.component.scss']
})
export class ScrapperComponent implements OnInit {

  context: 'creating' | 'updating';
  runningScrapper = false;
  savingScrapper = false;
  rawOutputVisible = false;
  scrapper = {};
  id;

  scrapperForm = new FormGroup({
    id: new FormControl(''),
    url: new FormControl('', Validators.required),
    cssSelector: new FormControl('', Validators.required),
    outputFormat: new FormControl('', Validators.required),
  });

  scrapperFormOutput = new FormGroup({
    result: new FormControl(''),
    console: new FormControl(''),
  });

  constructor(private service: ScrappersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id) {
        this.setContext('updating');
        this.service.findOne(this.id).pipe(take(1)).subscribe(data => {
          const values = this.getFormValues(data as ScrapperFormValue);
          this.scrapperForm.setValue(values);
          this.scrapper = data;
          this.rawOutputVisible = false;
        });
      } else {
        this.setContext('creating');
      }
    });
  }

  setContext(context: 'updating' | 'creating') {
    this.context = context;
  }

  getFormValues({ id, url, cssSelector, outputFormat }: ScrapperFormValue): ScrapperFormValue {
    return { id, url, cssSelector, outputFormat };
  }

  run() {
    this.runningScrapper = true;
    this.service.run(this.scrapperForm.value).subscribe(response => {
      this.scrapperFormOutput.setValue(response);
      this.rawOutputVisible = false;
      this.runningScrapper = false;
    })
  }

  onSubmit() {
    this.savingScrapper = true;
    const body = this.scrapperForm.value;
    setTimeout(() => {
      if (this.context === 'creating') {
        this.service.create(body).subscribe(res => {
          this.savingScrapper = false;
          this.router.navigate(['dashboard/scrappers']);
        })
      } else if (this.context === 'updating') {
        this.service.update(this.id, body).subscribe(res => {
          this.savingScrapper = false;
          this.router.navigate(['dashboard/scrappers']);
        })
      }
    }, 1000);
  }

  renderOutput() {
    this.rawOutputVisible = true;
  }

}
