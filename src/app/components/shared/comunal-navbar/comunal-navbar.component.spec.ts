import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunalNavbarComponent } from './comunal-navbar.component';

describe('ComunalNavbarComponent', () => {
  let component: ComunalNavbarComponent;
  let fixture: ComponentFixture<ComunalNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunalNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
