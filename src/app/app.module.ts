import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Div1Component } from './div1/div1.component';
import { Div2Component } from './div2/div2.component';
import { Div3Component } from './div3/div3.component';

@NgModule({
  declarations: [
    AppComponent,
    Div1Component,
    Div2Component,
    Div3Component
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
