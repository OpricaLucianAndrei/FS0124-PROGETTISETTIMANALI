import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/post';
import { User } from '../models/post';
import { Observable, Observer, throwError} from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private apiUrl = 'https://6606cf7ebe53febb857eac75.mockapi.io/';
  
  private todos: Todo[] = [];
  private users: User[] = [];

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    const url = `${this.apiUrl}/todos`;
    return this.http.get<Todo[]>(url).pipe(
      tap((todos: Todo[]) => {
        this.todos = todos;
      })
    );
  }

  getUsers(): Observable<User[]> {
    const url = `${this.apiUrl}/users`;
    return this.http.get<User[]>(url);
  }

  getTodoById(id: number): Todo | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  updateTodoLocal(todo: Todo): Observable<Todo> {
    const index = this.todos.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      this.todos[index] = { ...this.todos[index], ...todo };
      return new Observable(observer => {
        observer.next(this.todos[index]);
        observer.complete();
      });
    }
    return throwError(`Todo with ID ${todo.id} not found`);
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
