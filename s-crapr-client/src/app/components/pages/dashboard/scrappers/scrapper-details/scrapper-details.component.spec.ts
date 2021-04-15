import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapperDetailsComponent } from './scrapper-details.component';

describe('ScrapperDetailsComponent', () => {
  let component: ScrapperDetailsComponent;
  let fixture: ComponentFixture<ScrapperDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrapperDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
