import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizingPageComponent } from './resizing-page.component';

describe('ResizingPageComponent', () => {
  let component: ResizingPageComponent;
  let fixture: ComponentFixture<ResizingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
