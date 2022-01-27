import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputC2Component } from './output-c2.component';

describe('OutputC2Component', () => {
  let component: OutputC2Component;
  let fixture: ComponentFixture<OutputC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputC2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
