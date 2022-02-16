import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerPageComponent } from './countdown-timer-page.component';

describe('CountdownTimerPageComponent', () => {
  let component: CountdownTimerPageComponent;
  let fixture: ComponentFixture<CountdownTimerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
