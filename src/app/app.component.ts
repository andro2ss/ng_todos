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
    new Todo(Guid.create(), 'test1', false),
    new Todo(Guid.create(), 'test2', false)
  ]

  handleSubmit(form: NgForm) {
    let tempTodo = new Todo(Guid.create(), form.value.text, false)
    this.todos.push(tempTodo);
    form.resetForm();
  }
}
