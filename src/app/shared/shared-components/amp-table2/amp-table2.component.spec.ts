import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpTable2Component } from './amp-table2.component';

describe('AmpTable2Component', () => {
  let component: AmpTable2Component;
  let fixture: ComponentFixture<AmpTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
