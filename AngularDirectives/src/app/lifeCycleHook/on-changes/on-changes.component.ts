import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Hero } from '../../models/hero';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-on-changes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './on-changes.component.html',
  styleUrl: './on-changes.component.scss'
})
export class OnChangesComponent implements OnChanges {

  @Input() hero!: Hero[];
  @Input() power: string = ''

  changeLog: string[] = [];  // Declare changeLog
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }


}
