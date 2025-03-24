import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { AuthFooterComponent } from './components/auth-footer/auth-footer.component';
import { RouterModule } from '@angular/router';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { HidePasswordPipe } from './pipes/hide-password.pipe';
import { FormsModule } from '@angular/forms';
import { FeaturesWrapperListComponent } from './components/features-wrapper-list/features-wrapper-list.component';


const sharedAuthComp = [
  AuthLayoutComponent,
  AuthHeaderComponent,
  AuthFooterComponent,
  FeaturesWrapperListComponent
]
@NgModule({
  declarations: [
    ...sharedAuthComp,
    CapitalizePipe,
    HidePasswordPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HidePasswordPipe,
    CapitalizePipe,
    AuthLayoutComponent,
    FormsModule,
    FeaturesWrapperListComponent
  ]
})
export class SharedModule { }
