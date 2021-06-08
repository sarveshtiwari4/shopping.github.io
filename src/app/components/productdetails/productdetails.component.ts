import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private data:DataService, private rout:ActivatedRoute) { }
  productid : any;
  searchproduct: any;

  ngOnInit(): void {
    this.productid=this.rout.snapshot.paramMap.get('id');
    this.searchproduct=this.data.getproduct().find(x=>x.productid==this.productid);
  }

}
