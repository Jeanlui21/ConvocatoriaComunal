import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunalFooterComponent } from './comunal-footer.component';

describe('ComunalFooterComponent', () => {
  let component: ComunalFooterComponent;
  let fixture: ComponentFixture<ComunalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunalFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
