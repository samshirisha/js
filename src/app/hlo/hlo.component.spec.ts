import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HloComponent } from './hlo.component';

describe('HloComponent', () => {
  let component: HloComponent;
  let fixture: ComponentFixture<HloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
