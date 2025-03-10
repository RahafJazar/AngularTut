import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LookupsListComponent } from '../components/lookups-list/lookups-list.component';



@NgModule({
  declarations: [LookupsListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LookupsListComponent
  ]
})
export class LookupsModule { }
