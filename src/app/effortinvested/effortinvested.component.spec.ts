import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffortinvestedComponent } from './effortinvested.component';

describe('EffortinvestedComponent', () => {
  let component: EffortinvestedComponent;
  let fixture: ComponentFixture<EffortinvestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EffortinvestedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EffortinvestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
