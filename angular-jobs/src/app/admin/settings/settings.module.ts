import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from '../components/settings/settings.component';



@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
