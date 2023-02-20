import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewarrayComponent } from './reviewarray.component';

describe('ReviewarrayComponent', () => {
  let component: ReviewarrayComponent;
  let fixture: ComponentFixture<ReviewarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewarrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
