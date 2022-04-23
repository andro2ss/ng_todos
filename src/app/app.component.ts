import {Component} from '@angular/core';
import {Guid} from "guid-typescript";
import {Todo} from "../models/todo.model";

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
}
