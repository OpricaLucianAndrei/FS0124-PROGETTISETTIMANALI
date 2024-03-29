import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo, User } from 'src/app/models/post';

@Component({
  selector: 'app-todo-done',
  templateUrl: './todo-done.component.html',
  styleUrls: ['./todo-done.component.scss']
})
export class TodoDoneComponent implements OnInit {
  todos: Todo[] = [];
  users: User[] = [];
  filteredTodos: Todo[] = [];
  searchUserName: string = '';

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
        this.filteredTodos = todos;
      },
      error => {
        console.error('Errore durante il recupero dei todo:', error);
      }
    );

    this.todosService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        console.log('Utenti recuperati:', this.users);
      },
      error => {
        console.error('Errore durante il recupero degli utenti:', error);
      }
    );
  }

  getUserById(userId: number): User | undefined {
    return this.users.find(user => user.id === userId);
  }

  searchTodos(): void {
    this.filteredTodos = this.todos.filter(todo => {
      const user = this.getUserById(todo.userId);
      if (user) {
        return user.firstName.toLowerCase().includes(this.searchUserName.toLowerCase());
      }
      return false;
    });
  }

  resetSearch(): void {
    this.searchUserName = '';
    this.filteredTodos = this.todos;
  }

  updateTodoStatus(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todosService.updateTodoLocal(todo).subscribe(
      updatedTodo => {
        console.log('Todo aggiornato:', updatedTodo);
        const index = this.todos.findIndex(t => t.id === updatedTodo.id);
        if (index !== -1) {
          this.todos[index] = updatedTodo;
          const filteredIndex = this.filteredTodos.findIndex(td => td.id === updatedTodo.id);
          if (filteredIndex !== -1) {
            this.filteredTodos[filteredIndex] = updatedTodo;
          }
        }
      },
      error => {
        console.error('Errore durante l\'aggiornamento del todo:', error);
        todo.completed = !todo.completed;
      }
    );
  }
}
