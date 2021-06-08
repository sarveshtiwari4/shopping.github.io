import { ManagerGuard } from './Guards/manager.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { FootwearComponent } from './components/footwear/footwear.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ManagerComponent } from './components/manager/manager.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DatademoComponent } from './components/datademo/datademo.component';
import { SecuritydemoComponent } from './components/securitydemo/securitydemo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationdemoComponent } from './components/animationdemo/animationdemo.component';
import { IntvComponent } from './components/intv/intv.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ElectronicsComponent,
    FootwearComponent,
    NotfoundComponent,
    SearchComponent,
    CategoriesComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    ManagerComponent,
    LoginComponent,
    DatademoComponent,
    SecuritydemoComponent,
    AnimationdemoComponent,
    IntvComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
