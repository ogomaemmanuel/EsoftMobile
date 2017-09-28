import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AtmCardsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AtmCardsProvider {
  endPoint: string = "http://localhost:53725/customers/";
  atmCardEndPoint:string="http://localhost:53725/"
  constructor(public http: Http) {
    console.log('Hello AtmCardsProvider Provider');
  }
  public getAtMCards(id: string) {
    return this.http.get(this.endPoint + id + "/atm-cards").map(resp => resp.json());
  }

  public blockAtmCard(cardId: string,customerId:string) {
    return this.http.put(this.atmCardEndPoint+"AtmCards/block?id="+cardId+"&customerId="+customerId, {})
    .map(resp => resp.json());
    
  }
}
