import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoToolbarComponent } from './edit-todo-toolbar.component';

describe('EditTodoToolbarComponent', () => {
  let component: EditTodoToolbarComponent;
  let fixture: ComponentFixture<EditTodoToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTodoToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
