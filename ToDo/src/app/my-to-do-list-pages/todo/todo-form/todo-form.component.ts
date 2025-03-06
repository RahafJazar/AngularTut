import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {

  item: string = ''

  @Output() itemAdd: EventEmitter<string> = new EventEmitter<string>();
  clickHandler() {
    this.itemAdd.emit(this.item)
  }
}
