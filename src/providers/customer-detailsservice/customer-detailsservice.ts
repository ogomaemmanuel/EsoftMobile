import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import { Customer } from "../../models/customer";

/*
  Generated class for the CustomerDetailsserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomerDetailsserviceProvider {
  public customer: Customer;
  constructor(public http: Http) {
    console.log('Hello CustomerDetailsserviceProvider Provider');
  }

  getCustumerDetails(id: string) {
    return this.http.get("http://localhost:53725/customers/" + id).do(res => {
      console.log(res);
    })
      .map(resp => resp.json());
  }

}
