import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddteammemberComponent } from './addteammember.component';

describe('AddteammemberComponent', () => {
  let component: AddteammemberComponent;
  let fixture: ComponentFixture<AddteammemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddteammemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddteammemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
