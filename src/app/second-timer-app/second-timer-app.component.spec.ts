import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTimerAppComponent } from './second-timer-app.component';

describe('SecondTimerAppComponent', () => {
  let component: SecondTimerAppComponent;
  let fixture: ComponentFixture<SecondTimerAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondTimerAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTimerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
