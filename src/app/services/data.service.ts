import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getcategories(){

    return [
      {categoryid:1, categoryname:'electronics'},
      {categoryid:2, categoryname:'footwear'}
    ]
  }
    getproduct(){
      return[
        {productid :1, name:'jbl speaker', price :4500, categoryid:1, photo:'assets/speaker.jpg'},
        {productid :2, name:'ear pods', price :3000, categoryid:1, photo:'assets/earpods.jpg'},
        {productid :3, name:'nike casuals', price :2500, categoryid:2, photo:'assets/shoe.jpg'},
        {productid :4, name:'lee cooper', price :5500, categoryid:2, photo:'assets/lee.jpg'}

      ]
    }

    getusers(){
      return[
        {name:'john', roll: 'admin', password :'john12'},
        {name:'david', roll: 'manager', password :'david12'},
      ]

    }
  
}
