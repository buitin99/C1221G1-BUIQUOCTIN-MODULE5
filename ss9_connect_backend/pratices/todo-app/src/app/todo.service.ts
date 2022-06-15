import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo';
import {environment} from '../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class TodoService {


  constructor(private http: HttpClient) {}
  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${API_URL}/todos`);
  }

  saveTodo(todo): Observable<Todo> {
    return this.http.post<Todo>(`${API_URL}/todos`, todo);
  }

  updateTodo(todo): Observable<Todo> {
    return this.http.patch<Todo>(`${API_URL}/todos/${todo.id}`, todo);
  }
}
