import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}
  @Input() todo!: Todo;
  @Output() updateTodo = new EventEmitter();
  @Output() delete = new EventEmitter();
  editTodoToolbarLoaded: boolean = false;

  ngOnInit(): void {}

  toggleTodo(id: string, title: string, completed: boolean) {
    console.log('inside here');
    this.updateTodo.emit({ id, title, completed });
    this.openSnackBar('Todo Updated!', 'bg-green-300');
  }

  deleteTodo(id: string) {
    this.delete.emit(id);
    this.openSnackBar('Todo Deleted!', 'bg-red-300');
  }

  openSnackBar(message: string, panelClass: string = '') {
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: [panelClass],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
