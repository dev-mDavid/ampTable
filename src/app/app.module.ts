import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { NavShellComponent } from './nav-shell/nav-shell.component';
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [
    AppComponent,
    NavShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
