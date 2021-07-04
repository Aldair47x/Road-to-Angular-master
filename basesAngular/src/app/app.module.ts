import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroModule } from './heroes/hero.module';



@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
