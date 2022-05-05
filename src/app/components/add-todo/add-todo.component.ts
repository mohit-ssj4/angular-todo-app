import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TodosService } from 'src/app/services/todos/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  constructor(private fb: FormBuilder, private todosService: TodosService) {}

  addTodoFrom!: FormGroup;

  ngOnInit(): void {
    this.addTodoFrom = this.fb.group({
      title: new FormControl('', [Validators.required]),
      completed: new FormControl(false),
    });
  }

  addTodo() {
    this.todosService.addTodo(this.addTodoFrom.value).subscribe({
      error: (error) => {
        console.log(error);
      },
    });
    this.addTodoFrom.reset();
  }
}
