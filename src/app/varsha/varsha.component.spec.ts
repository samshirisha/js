import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarshaComponent } from './varsha.component';

describe('VarshaComponent', () => {
  let component: VarshaComponent;
  let fixture: ComponentFixture<VarshaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarshaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
