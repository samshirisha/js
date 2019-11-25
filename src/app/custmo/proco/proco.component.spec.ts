import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcoComponent } from './proco.component';

describe('ProcoComponent', () => {
  let component: ProcoComponent;
  let fixture: ComponentFixture<ProcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
