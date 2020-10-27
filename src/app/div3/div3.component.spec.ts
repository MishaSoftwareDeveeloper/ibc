import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Div3Component } from './div3.component';

describe('Div3Component', () => {
  let component: Div3Component;
  let fixture: ComponentFixture<Div3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Div3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Div3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
