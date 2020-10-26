import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicResizingComponent } from './dynamic-resizing.component';

describe('DynamicResizingComponent', () => {
  let component: DynamicResizingComponent;
  let fixture: ComponentFixture<DynamicResizingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicResizingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicResizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
