import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos/todos.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoComponent } from 'src/app/components/add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor(private todosService: TodosService, private dialog: MatDialog) {}
  errorMessage: string = '';
  todos: Todo[] = [];
  todo!: Todo;

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todosService.getAllTodos().subscribe({
      next: (data) => {
        this.todos = data;
      },
      error: (error) => {
        this.handleError(error);
      },
    });
  }

  getTodo(id: string) {
    this.todosService.getTodo(id).subscribe({
      next: (data) => {
        this.todo = data;
      },
      error: (error) => {
        this.handleError(error);
      },
    });
  }

  updateTodo(event: any) {
    this.todosService
      .updateTodo(event.id, event.title, event.completed)
      .subscribe({
        next: () => {
          this.getAllTodos();
        },
        error: (error) => {
          this.handleError(error);
        },
      });
  }

  deleteTodo(id: string) {
    this.todosService.deleteTodo(id).subscribe({
      next: () => {
        this.getAllTodos();
      },
      error: (error) => {
        this.handleError(error);
      },
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddTodoComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllTodos();
    });
  }

  handleError(error: HttpErrorResponse) {
    this.errorMessage = error.message;
    console.log(error);
  }
}
