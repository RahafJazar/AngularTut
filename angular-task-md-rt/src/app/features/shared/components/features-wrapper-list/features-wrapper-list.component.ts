import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-features-wrapper-list',
  templateUrl: './features-wrapper-list.component.html',
  styleUrl: './features-wrapper-list.component.scss'
})
export class FeaturesWrapperListComponent {
  @Input() tableName: string = ''
}
