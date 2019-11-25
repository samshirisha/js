import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carr1Component } from './carr1.component';

describe('Carr1Component', () => {
  let component: Carr1Component;
  let fixture: ComponentFixture<Carr1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carr1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
