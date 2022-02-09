import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputC1Component } from './output-c1.component';

describe('OutputC1Component', () => {
  let component: OutputC1Component;
  let fixture: ComponentFixture<OutputC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputC1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
