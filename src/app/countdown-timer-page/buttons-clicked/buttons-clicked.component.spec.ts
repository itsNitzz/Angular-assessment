import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsClickedComponent } from './buttons-clicked.component';

describe('ButtonsClickedComponent', () => {
  let component: ButtonsClickedComponent;
  let fixture: ComponentFixture<ButtonsClickedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsClickedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsClickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
