import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnChanges {

  @Input() product: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      console.log("chages are ", changes);
      console.log("product changed to :", changes['product'].currentValue);
    }
  }

}
