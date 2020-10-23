import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpColComponent } from './amp-col.component';

describe('AmpColComponent', () => {
  let component: AmpColComponent;
  let fixture: ComponentFixture<AmpColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
