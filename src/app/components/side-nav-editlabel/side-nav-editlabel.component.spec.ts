import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavEditlabelComponent } from './side-nav-editlabel.component';

describe('SideNavEditlabelComponent', () => {
  let component: SideNavEditlabelComponent;
  let fixture: ComponentFixture<SideNavEditlabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavEditlabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavEditlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
