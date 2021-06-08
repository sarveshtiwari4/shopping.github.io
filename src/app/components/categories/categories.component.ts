import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
category: any;

  constructor(private data:DataService) { }


  ngOnInit() {

    this.category =this.data.getcategories();
  }
  
}
