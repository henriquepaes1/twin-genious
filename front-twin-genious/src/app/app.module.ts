import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeniousGameComponent } from './components/genious-game/genious-game.component';
import { InitialComponent } from './components/initial/initial.component';
import { ModoComponent } from './components/modo/modo.component';
import { DificuldadeComponent } from './components/dificuldade/dificuldade.component';

@NgModule({
  declarations: [
    AppComponent,
    GeniousGameComponent,
    InitialComponent,
    ModoComponent,
    DificuldadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
