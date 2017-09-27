import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AccountDetail } from '../../models/accountDetails';

/*
  Generated class for the AccontsDetailsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccountsDetailsServiceProvider {
endPoint:string="http://localhost:53725/customers/";
  constructor(public storage: Storage, public http: Http) {
    console.log('Hello AccontsDetailsServiceProvider Provider');
  }

  public getSavingsAccountDetails(id: string) {
    return this.http.get(this.endPoint + id + "/savings").do(data => {
      data.json();
      console.log("accounts data" + data);
    }).map(res => res.json());
  }

  public getLoansAccountDetails(id: string) {
    return this.http.get(this.endPoint + id + "/loans").do(data => {
      data.json();
      console.log("accounts data" + data);
    }).map(res => res.json());
  }

  public getSharesAccountDetails(id: string) {
    return this.http.get(this.endPoint + id + "/shares").do(data => {
      data.json();
      console.log("accounts data" + data);
    }).map(res => res.json());
  }
}


