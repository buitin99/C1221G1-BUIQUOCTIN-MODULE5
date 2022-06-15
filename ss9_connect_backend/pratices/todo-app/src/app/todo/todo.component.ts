import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../todo.service';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getAll().subscribe(todo => {
      this.todos = todo;
    });
  }

  toggleTodo(todo: Todo) {
    todo.complete = ! todo.complete;
    this.todoService.updateTodo(todo).subscribe(() => {
      this.ngOnInit();
    });
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };

      this.todoService.saveTodo(todo).subscribe(() => {
        this.todos.push(todo);
        this.content.reset();
      });
    }
  }
}
