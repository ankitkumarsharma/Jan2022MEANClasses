import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildC1Component } from './viewchild-c1.component';

describe('ViewchildC1Component', () => {
  let component: ViewchildC1Component;
  let fixture: ComponentFixture<ViewchildC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchildC1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
