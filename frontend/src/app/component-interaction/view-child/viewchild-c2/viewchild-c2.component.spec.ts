import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildC2Component } from './viewchild-c2.component';

describe('ViewchildC2Component', () => {
  let component: ViewchildC2Component;
  let fixture: ComponentFixture<ViewchildC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchildC2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
