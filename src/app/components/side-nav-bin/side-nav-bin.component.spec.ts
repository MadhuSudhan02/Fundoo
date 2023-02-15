import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavBinComponent } from './side-nav-bin.component';

describe('SideNavBinComponent', () => {
  let component: SideNavBinComponent;
  let fixture: ComponentFixture<SideNavBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavBinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
