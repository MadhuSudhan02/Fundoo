import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavArchieveComponent } from './side-nav-archieve.component';

describe('SideNavArchieveComponent', () => {
  let component: SideNavArchieveComponent;
  let fixture: ComponentFixture<SideNavArchieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavArchieveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavArchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
