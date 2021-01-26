import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapperItemComponent } from './scrapper-item.component';

describe('ScrapperItemComponent', () => {
  let component: ScrapperItemComponent;
  let fixture: ComponentFixture<ScrapperItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrapperItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapperItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
