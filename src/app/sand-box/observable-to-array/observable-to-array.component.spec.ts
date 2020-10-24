import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableToArrayComponent } from './observable-to-array.component';

describe('ObservableToArrayComponent', () => {
  let component: ObservableToArrayComponent;
  let fixture: ComponentFixture<ObservableToArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableToArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableToArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
