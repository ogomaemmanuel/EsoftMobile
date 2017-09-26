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

  constructor(public storage: Storage, public http: Http) {
    console.log('Hello AccontsDetailsServiceProvider Provider');
  }

  public getSavingsAccountDetails() {
    var  storedDataId="";
     this.storage.get("customerDetails").then(data=>{
      storedDataId=data;
    });
  return  this.http.get("http://localhost:53725/customers/"+storedDataId+"/savings").do(data => {
      data.json();
      console.log("accounts data" + data);
      //let modal = this.modalCtrl.create(BalancesDetailsPage, { accountDetails: this.accountDetails });
      //modal.present()
    }).map(res=>res.json());

  }
}


