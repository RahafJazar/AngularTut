import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './features/shared/shared.module';
import { MainFeaturesWrapperListComponent } from './components/main-features-wrapper-list/main-features-wrapper-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFeaturesWrapperListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
