import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-edit-todo-toolbar',
  templateUrl: './edit-todo-toolbar.component.html',
  styleUrls: ['./edit-todo-toolbar.component.css'],
})
export class EditTodoToolbarComponent implements OnInit {
  constructor() {}
  @Input() todo!: Todo;
  @Output() delete = new EventEmitter();

  ngOnInit(): void {}

  deleteTodo(event: Event) {
    event.stopPropagation();
    this.delete.emit();
  }
}
