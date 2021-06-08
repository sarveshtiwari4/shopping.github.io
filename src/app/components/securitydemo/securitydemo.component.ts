import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-securitydemo',
  templateUrl: './securitydemo.component.html',
  styleUrls: ['./securitydemo.component.css']
})
export class SecuritydemoComponent implements OnInit {
xssUrl="javaScript: alert('Hello!')";
trustedUrl: any;

x="https://www.youtube.com/embed/W06JfXSsKEs"
y : any;
  constructor(private sanitozer: DomSanitizer) { }

  ngOnInit(): void {
     this.trustedUrl=this.sanitozer.bypassSecurityTrustUrl(this.xssUrl);
     this.y=this.sanitozer.bypassSecurityTrustResourceUrl(this.x);
  }

}
