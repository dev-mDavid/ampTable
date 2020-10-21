import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpTableComponent } from './amp-table.component';

describe('AmpTableComponent', () => {
  let component: AmpTableComponent;
  let fixture: ComponentFixture<AmpTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
