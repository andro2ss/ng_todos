import {Component} from '@angular/core';
import {Guid} from "guid-typescript";
import {Todo} from "../models/todo.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [
    new Todo(Guid.create(), 'Test task 1', false),
    new Todo(Guid.create(), 'Test task 2', true),
    new Todo(Guid.create(), 'Test task 3', false)
  ]

  handleSubmit(form: NgForm) {
    let tempTodo = new Todo(Guid.create(), form.value.text, false)
    if (form.value.text) {
      this.todos.push(tempTodo);
    }
    form.resetForm();
  }

  handleDone(id: Guid) {
    let tempTodo = this.todos.filter(x => x.id === id)[0];
    tempTodo.isDone = true;
  }

  handleNotDone(id: Guid) {
    let tempTodo = this.todos.filter(x => x.id === id)[0];
    tempTodo.isDone = false;
  }

  isDone(arr: Todo[]) {
    return arr.filter(item => item.isDone).length > 0;
  }

  isNotDone(arr: Todo[]) {
    return arr.filter(item => !item.isDone).length > 0;
  }


  handleDelete(id: Guid) {
    let tempTodo = this.todos.filter(x => x.id === id)[0];
    let index = this.todos.indexOf(tempTodo, 0);
    if (index > -1) {
      this.todos.splice(index, 1)
    }
  }
}
