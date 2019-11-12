import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; //importamos la clase exportable de rutas
import { AppComponent } from './app.component';
import { CompaComponent } from './compa/compa.component';
import { CompbComponent } from './compb/compb.component';
import { CompcComponent } from './compc/compc.component';
import { SubaComponent } from './suba/suba.component';
import { SubbComponent } from './subb/subb.component';
import { SubcComponent } from './subc/subc.component';
import { SubdComponent } from './compa/subd/subd.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaComponent,
    CompbComponent,
    CompcComponent,
    SubaComponent,
    SubbComponent,
    SubcComponent,
    SubdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule //acá se registra el módulo de rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
