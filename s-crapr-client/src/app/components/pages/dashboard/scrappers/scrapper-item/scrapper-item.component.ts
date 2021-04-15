import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-scrapper-item]',
  templateUrl: './scrapper-item.component.html',
  styleUrls: ['./scrapper-item.component.scss'],
})
export class ScrapperItemComponent implements OnInit {

  @Input('scrapper') scrapper;

  constructor() { }

  ngOnInit(): void {
  }

}
