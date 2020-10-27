import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpCol2Component } from './amp-col2.component';

describe('AmpCol2Component', () => {
  let component: AmpCol2Component;
  let fixture: ComponentFixture<AmpCol2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpCol2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpCol2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
