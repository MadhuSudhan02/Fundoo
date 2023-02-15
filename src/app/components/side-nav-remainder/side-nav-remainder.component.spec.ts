import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavRemainderComponent } from './side-nav-remainder.component';

describe('SideNavRemainderComponent', () => {
  let component: SideNavRemainderComponent;
  let fixture: ComponentFixture<SideNavRemainderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavRemainderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavRemainderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
