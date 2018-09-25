import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitoraddComponent } from './visitoradd.component';

describe('VisitoraddComponent', () => {
  let component: VisitoraddComponent;
  let fixture: ComponentFixture<VisitoraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitoraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitoraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
