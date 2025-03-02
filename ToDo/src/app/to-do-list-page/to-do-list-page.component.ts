import { Component } from '@angular/core';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { ToDo } from '../models/todo.model';
import { ToDoStatus } from '../models/enum/todo-status.enum';

@Component({
  selector: 'app-to-do-list-page',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './to-do-list-page.component.html',
  styleUrl: './to-do-list-page.component.scss'
})
export class ToDoListPageComponent {

  items: ToDo[] = this.initialItems()


  initialItems(): ToDo[] {
    return [{ title: "C#", status: ToDoStatus.New },
    { title: "Angular", status: ToDoStatus.New },
    { title: "Java", status: ToDoStatus.New }

    ]
  }
  addItemHandler(item: string): void {
    const itemToAdd: ToDo = { title: item, status: ToDoStatus.New };
    this.items.push(itemToAdd)
  }

  resetFactoryHandler(event: boolean): void {
    if (event == true) {
      this.items = this.initialItems();
    }
  }
}
