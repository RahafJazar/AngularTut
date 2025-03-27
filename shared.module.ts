import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoyoutComponent } from './components/auth-loyout/auth-loyout.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { AuthFooterComponent } from './components/auth-footer/auth-footer.component';
import { RouterModule } from '@angular/router';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { HidePasswordPipe } from './pipes/hide-password.pipe';
import { FormsModule } from '@angular/forms';
import { FeaturesListComponent } from './components/features-list/features-list.component';
import { AuthService } from './services/auth.service';
@NgModule({
  declarations: [
    AuthLoyoutComponent,
    AuthHeaderComponent,
    AuthFooterComponent,
    CapitalizePipe,
    HidePasswordPipe,
    FeaturesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    AuthLoyoutComponent,
    CapitalizePipe,
    HidePasswordPipe,
    FormsModule,
    FeaturesListComponent
  ],
  providers: [
    {provide: AuthService, useClass: AuthService}
  ]
})
export class SharedModule { }
