import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayprintComponent } from './arrayprint.component';

describe('ArrayprintComponent', () => {
  let component: ArrayprintComponent;
  let fixture: ComponentFixture<ArrayprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
