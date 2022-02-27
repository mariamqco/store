import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientRegisterComponent } from './components/client-register/client-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    ProductFormComponent,
    ClientFormComponent,
    HeaderComponent,
    FooterComponent,
    ClientRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
