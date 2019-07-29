import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactService } from './contact.service';


@NgModule({
  declarations: [
    AppComponent,ContactsComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ContactService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
