import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products:any;
  categoryid : any;

  constructor(private data : DataService, private rout : ActivatedRoute, private router: Router  ) { }
 
  ngOnInit(): void {

    this.categoryid=this.rout.snapshot.paramMap.get('id');
    this.products=this.data.getproduct().filter(products=>products.categoryid==this.categoryid);
  }


  detailsclick(id: any) {

    this.router.navigate(['details',id],{relativeTo:this.rout})

  }
}
