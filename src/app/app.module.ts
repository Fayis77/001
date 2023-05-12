import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './new/layout/header/header.component';
import { FooterComponent } from './new/layout/footer/footer.component';
import { NewModule } from './new/new.module';


@NgModule({
  declarations: [       
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
