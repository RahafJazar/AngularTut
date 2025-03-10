import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { DemoComponent } from './pages/demo/demo.component';
import { DownloadComponent } from './pages/download/download.component';
import { SharedModule } from './modules/shared/shared.module';
import { LayoutsModule } from './modules/shared/layouts/layouts.module';

const publicDecl = [
  AppComponent,
  HomeComponent,
  DemoComponent,
  DownloadComponent
]

@NgModule({
  declarations: [
    ...publicDecl
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LayoutsModule,
    AppRoutingModule
  ],
  exports: [
    ...publicDecl
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
