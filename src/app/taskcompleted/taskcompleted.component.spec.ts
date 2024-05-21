import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskcompletedComponent } from './taskcompleted.component';

describe('TaskcompletedComponent', () => {
  let component: TaskcompletedComponent;
  let fixture: ComponentFixture<TaskcompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskcompletedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskcompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
