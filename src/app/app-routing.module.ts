import { ManagerComponent } from './../../../amazon/src/app/manager/manager.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { FootwearComponent } from './components/footwear/footwear.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { LoginComponent } from './components/login/login.component';
import { ManagerGuard } from './Guards/manager.guard';

const routes: Routes =[
    {path:'home', component: HomeComponent},
    
    {path:'electronics', component: ElectronicsComponent},
    {path:'footwear', component: FootwearComponent},
    {path:'search/:id/:name/:price', component: SearchComponent},
    {path:'categories', component: CategoriesComponent},
    {path:'categories/:id', component:ProductlistComponent,
    children : [
      {path:'details/:id', component: ProductdetailsComponent}
    ] },
    {path:'login', component:LoginComponent },
    {path:'manager/:name/:pwd/:roll', component:ManagerComponent, canActivate:[ManagerGuard] },


    {path : '', redirectTo: 'home', pathMatch:'full'},
    {path:'**', component: NotfoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports : [RouterModule]
})

export class AppRoutingModule {}