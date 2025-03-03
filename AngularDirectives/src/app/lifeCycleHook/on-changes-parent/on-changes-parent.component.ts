import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { OnChangesComponent } from '../on-changes/on-changes.component';
import { SpyComponent } from '../spy/spy.component';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-on-changes-parent',
  standalone: true,
  imports: [OnChangesComponent, SpyComponent],
  templateUrl: './on-changes-parent.component.html',
  styleUrl: './on-changes-parent.component.scss'
})
export class OnChangesParentComponent implements AfterViewInit {

  hero!: Hero[]
  @ViewChild(SpyComponent) spy!: SpyComponent;
  power: string = ""

  ngAfterViewInit(): void {
    if (this.spy) {
      this.hero = this.spy.heros;
    }
  }
}
