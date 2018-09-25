import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorupdateComponent } from './visitorupdate.component';

describe('VisitorupdateComponent', () => {
  let component: VisitorupdateComponent;
  let fixture: ComponentFixture<VisitorupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
