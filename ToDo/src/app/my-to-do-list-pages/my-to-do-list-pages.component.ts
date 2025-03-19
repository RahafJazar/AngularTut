import { Component } from '@angular/core';
import todoComponents from './todo/todo';
import { ToDo } from '../models/todo.model';
import { retry } from 'rxjs';
import { ToDoStatus } from '../models/enum/todo-status.enum';

@Component({
  selector: 'app-my-to-do-list-pages',
  standalone: true,
  imports: [...todoComponents],
  templateUrl: './my-to-do-list-pages.component.html',
  styleUrl: './my-to-do-list-pages.component.scss'
})
export class MyToDoListPagesComponent {
  items: ToDo[] = this.initialItems();
  item!: ToDo;
  initialItems(): ToDo[] {
    return [
      { title: "C#", status: ToDoStatus.New },
      { title: "Java", status: ToDoStatus.New }

    ]
  }
  addItemHandler(item: string): void {
    const itemToAdd: ToDo = { title: item, status: ToDoStatus.New }
    this.items.push(itemToAdd)
  }

  resetFactoryHandler(event: boolean) {
    if (event === true) {
      this.items = this.initialItems()
    }
  }

  filteredArray: ToDo[] = []
  searchOnItem(itemSearch: string) {
    if (itemSearch) {
      this.filteredArray = this.items.filter(item =>
        item.title.toLowerCase().includes(itemSearch.toLowerCase())
      );
    } else {
      // If the search input is empty, show all items
      this.filteredArray = [...this.items];
    }
  }

  resetSearchHandler(isReset: boolean) {
    if (isReset === true) {
      this.filteredArray.length = 0;
    }
  }


}
