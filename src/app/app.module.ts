import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import {holdingService} from './holding.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    InputComponent,
    OutputComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    holdingService,
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
