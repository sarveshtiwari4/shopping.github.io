import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../../services/apidata.service';



@Component({
  selector: 'app-datademo',
  templateUrl: './datademo.component.html',
  styleUrls: ['./datademo.component.css']
})
export class DatademoComponent implements OnInit {

  constructor(private data :ApidataService) { }
  products: any;
  

  ngOnInit(): void {
    this.data.GetProducts().subscribe(product=>this.products=product)
  }

  onFormsubmit(data: any){
    //alert ( data.productid+"\n"+data.name+"\n"+data.price);
    this.data.AddProducts(data).subscribe(error=>console.log ("something went wrong"));

    alert ("Record Inserted");
    location.reload();
  }


}
