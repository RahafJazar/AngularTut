import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss'
})
export class Child1Component {
  @Input() name: string = ""
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>()

  changeName(event: any) {
    this.nameChange.emit(event.target.value);
  }
}
