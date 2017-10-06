import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from './../shared/todo-item';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() items: TodoItem[];

  constructor() { }

  ngOnInit() {
  }

}
