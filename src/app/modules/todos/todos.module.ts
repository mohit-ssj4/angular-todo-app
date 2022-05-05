import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoComponent } from 'src/app/components/todo/todo.component';
import { MaterialModule } from '../material/material/material.module';
import { EditTodoToolbarComponent } from 'src/app/components/edit-todo-toolbar/edit-todo-toolbar.component';
import { AddTodoComponent } from 'src/app/components/add-todo/add-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    EditTodoToolbarComponent,
    AddTodoComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TodosModule {}
