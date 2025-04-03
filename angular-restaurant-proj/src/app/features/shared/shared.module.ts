import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { AuthFooterComponent } from './components/auth-footer/auth-footer.component';
import { share } from 'rxjs';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { HidePasswordPipe } from './pipes/hide-password.pipe';


const sharedComp = [
  AuthLayoutComponent,
  AuthHeaderComponent,
  AuthFooterComponent,
  CapitalizePipe,
  HidePasswordPipe
]
@NgModule({
  declarations: [
    ...sharedComp
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    AuthLayoutComponent,
    CapitalizePipe,
    HidePasswordPipe
  ]
})
export class SharedModule { }
