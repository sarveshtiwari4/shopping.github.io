import { DataService } from './../services/data.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {
  

constructor (private data: DataService, private router:Router ) {}
users:any;
username :any;
password :any;
roll: any;

  canActivate(route1:ActivatedRouteSnapshot): boolean  {

 this.username = route1.paramMap.get('name') ;
 this.password = route1.paramMap.get('pwd');
 this.roll = route1.paramMap.get('roll');

  //alert (this.username+this.password+this.roll);

  this.users=this.data.getusers();

      for(var user of this.users){
        
        if (this.username == user.name && this.password == user.password && this.roll==user.roll) {

          return true;
          
          }
        
      }
      alert("Incorrect Login Credentials");
      this.router.navigate(['login']);
      return false;
    }
  
}
