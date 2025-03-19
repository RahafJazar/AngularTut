import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ToDo } from '../../../models/todo.model';
import { CommonModule } from '@angular/common';
import { ToDoStatus } from '../../../models/enum/todo-status.enum';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  ToDoStatus = ToDoStatus;
  showAlert: boolean = false;
  @Input() itemsList: ToDo[] = []


  @Output() resetFactoryChange: EventEmitter<boolean> = new EventEmitter<boolean>()



  deleteHandler(index: number): void {
    this.itemsList[index].status = ToDoStatus.Deleted
    console.log("index", index)
    console.log(this.itemsList[index].status)
  }

  restoreHandler(item: ToDo) {
    item.status = ToDoStatus.Restored
  }


  clearList(): void {
    this.itemsList.length = 0;
    this.showAlert = true

  }


  resetFactory(): void {
    this.resetFactoryChange.emit(true)
  }


  resetStatus() {
    this.itemsList.map((item: ToDo) => {
      item.status = ToDoStatus.New
    })
  }

  closeAlert() {
    this.showAlert = false
  }

}
