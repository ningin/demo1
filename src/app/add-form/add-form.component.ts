import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  placeholderText = 'please input thing property binding';
  todoText = '';
  addTodoItem($event) {
    console.log('button just click', $event);
  }
  addTodo($event: MouseEvent) {
    console.log('input text is : ' + this.todoText);
  }
  changeTodoText($event: KeyboardEvent) {
    this.todoText = ($event.target as HTMLInputElement).value;
  }
  constructor() { }

  ngOnInit() {
  }

}
