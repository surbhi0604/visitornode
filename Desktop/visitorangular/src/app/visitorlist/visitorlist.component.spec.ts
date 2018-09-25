import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorlistComponent } from './visitorlist.component';

describe('VisitorlistComponent', () => {
  let component: VisitorlistComponent;
  let fixture: ComponentFixture<VisitorlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
