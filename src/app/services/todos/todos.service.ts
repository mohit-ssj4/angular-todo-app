import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  baseURL: string = 'http://localhost:3000/';

  // GET /todos
  // Gets all the todos.
  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseURL + 'todos');
  }

  // GET /todos/{id}
  // Gets a specific todo.
  getTodo(id: string): Observable<Todo> {
    return this.http.get<Todo>(this.baseURL + `todos/${id}`);
  }

  // UPDATE /todos/{id}
  // Updates a specific todo.
  updateTodo(id: string, title: string, completed: boolean) {
    return this.http.put(this.baseURL + `todos/${id}`, {
      title: title,
      completed: !completed,
    });
  }

  // DELETE /todos/{id}
  // Deletes a specific todo.
  deleteTodo(id: string) {
    return this.http.delete(this.baseURL + `todos/${id}`);
  }

  // POST /todos
  // Adds a new todo.
  addTodo(data: Todo) {
    return this.http.post(this.baseURL + 'todos', {
      title: data.title,
      completed: data.completed,
    });
  }
}
