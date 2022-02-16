import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeControlsComponent } from './time-controls.component';

describe('TimeControlsComponent', () => {
  let component: TimeControlsComponent;
  let fixture: ComponentFixture<TimeControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
