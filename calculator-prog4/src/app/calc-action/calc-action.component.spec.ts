import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcActionComponent } from './calc-action.component';

describe('CalcActionComponent', () => {
  let component: CalcActionComponent;
  let fixture: ComponentFixture<CalcActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
