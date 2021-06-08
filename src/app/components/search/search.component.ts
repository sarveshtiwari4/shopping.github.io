import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
productId :any;
productName :any;
productPrice :any;

  constructor( private route: ActivatedRoute) { }
 

  ngOnInit(): void {
    this.productId=this.route.snapshot.paramMap.get('id');
    this.productName=this.route.snapshot.paramMap.get('name');
    this.productPrice=this.route.snapshot.paramMap.get('price');

  }
  

}
