import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AccountDetail } from '../../models/accountDetails';
import { EndPointHostProvider } from '../end-point-host/end-point-host';
@Injectable()
export class AccountsDetailsServiceProvider extends EndPointHostProvider {
  private endPoint: string = "customers/";
  constructor(public storage: Storage, public http: Http) {
    super();
    this.endPoint = this.getHost() + this.endPoint
  }
  public getSavingsAccountDetails(id: string) {
    return this.http.get(this.endPoint + id + "/savings").do(data => {
    }).map(res => res.json());
  }
  public getLoansAccountDetails(id: string) {
    return this.http.get(this.endPoint + id + "/loans").do(data => {
    }).map(res => res.json());
  }
  public getSharesAccountDetails(id: string) {
    return this.http.get(this.endPoint + id + "/shares").do(data => {
    }).map(res => res.json());
  }
  public registerNewUser(newuser: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.endPoint + "register", newuser, options).map(res => res);
  }
  public ResetCustomerOtpPin(pinDetails: any) {
    return this.http.post(this.endPoint + pinDetails.userId + "/set-pin ", pinDetails).map(resp => resp);
  }
  public ChangeCustomerPin(pinDetails: any) {
    return this.http.post(this.endPoint + pinDetails.userId + "/change-pin ", pinDetails).map(resp => resp);
  }
}
