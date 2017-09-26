import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Customer } from "../../models/customer";
@Injectable()
export class CustomerProvider {
customer:Customer;
  constructor(public http: Http) {
    console.log('Hello CustomerProvider Provider');
  }
  getCustomerDetails(id:string){
    var response=this.http.get("")
    response.map(res=>res.json()).subscribe(data=>{
      console.log("customer data "+ data )
    })


  }

}
