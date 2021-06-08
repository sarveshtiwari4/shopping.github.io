import { Router , ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  loginclick(name: string, pwd: any, roll: any){
    //alert(name+"\n"+pwd)

       this.router.navigate(['/manager',name, pwd, roll]);
  }
}
