import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { intv } from '../contracts/iproducts';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  productsGetUrl="http://127.0.0.1:8080/getproducts";
  productsPostUrl="http://127.0.0.1:8080/addproduct";
  productsupdateUrl="http://127.0.0.1:8080/updatemany";
 

  constructor(private http: HttpClient ) { }

  GetProducts():Observable<intv[]>{
    
    return this.http.get<intv[]>(this.productsGetUrl).pipe(map(response=>{
      return response;
    }));

  }

  AddProducts(data: any){
    return this.http.post<any>(this.productsPostUrl,data)
  }

  Updatemany(data: any){
    console.log(JSON.stringify(data));
    return this.http.put<any>(this.productsupdateUrl,data)
  }
}


