import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapCounterComponent } from './tap-counter.component';

describe('TapCounterComponent', () => {
  let component: TapCounterComponent;
  let fixture: ComponentFixture<TapCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TapCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
