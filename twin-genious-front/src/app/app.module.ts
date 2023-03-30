import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeniousGameComponent } from './components/genious-game/genious-game.component';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { ErrorComponent } from './components/error/error.component';
import { CompleteComponent } from './components/complete/complete.component';

@NgModule({
  declarations: [
    AppComponent,
    GeniousGameComponent,
    InitialPageComponent,
    ErrorComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
