import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitordeleteComponent } from './visitordelete.component';

describe('VisitordeleteComponent', () => {
  let component: VisitordeleteComponent;
  let fixture: ComponentFixture<VisitordeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitordeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitordeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
