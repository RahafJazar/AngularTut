import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../../../models/todo.model';
import { ToDoStatus } from '../../../models/enum/todo-status.enum';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  @Output() resetFactoryChange: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() itemList: ToDo[] = [];
  //reference from ToDoStatus enum
  ToDoStatus = ToDoStatus;
  dleteHandler(i: number): void {
    this.itemList[i].status = ToDoStatus.Deleted
  }

  restoreHandler(item: ToDo): void {
    item.status = ToDoStatus.Restored
  }

  clearList(): void {
    this.itemList.length = 0 //remove items
  }

  resetStatus(): void {
    this.itemList.forEach((item: ToDo) => item.status = ToDoStatus.New)
  }

  resetFactory(): void {
    this.resetFactoryChange.emit(true)
  }

}
