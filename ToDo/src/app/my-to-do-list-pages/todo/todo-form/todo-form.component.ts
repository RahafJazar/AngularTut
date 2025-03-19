import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  showSearch: boolean = false;
  item: string = ''
  itemSearchOn: string = ''
  @Output() searchReset: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() itemAdd: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchedItem: EventEmitter<string> = new EventEmitter<string>();
  clickHandler() {
    this.itemAdd.emit(this.item)
  }


  showSearchTab() {

    this.showSearch = !this.showSearch;
    console.log("showSearch is : ", this.showSearch)
  }

  sendItemSearched() {
    console.log("searched Clicked")
    this.searchedItem.emit(this.itemSearchOn)
  }

  resetSearch() {
    this.itemSearchOn = ''
    this.searchReset.emit(true)
  }
}
