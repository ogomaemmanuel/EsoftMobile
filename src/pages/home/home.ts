import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { BalacesPage } from "../balaces/balaces";
import { Customer } from "../../models/customer";
import { CustomerDetailsserviceProvider } from "../../providers/customer-detailsservice/customer-detailsservice";
import { Events, AlertController, LoadingController } from 'ionic-angular';
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CustomerDetailsserviceProvider],
 
})
export class HomePage {
  
  private customer: Customer;
  constructor(public loadingCtrl: LoadingController, public events: Events,customerDetPro: CustomerDetailsserviceProvider, public navCtrl: NavController, public menutrl: MenuController, public navParams: NavParams) {
    var userId = this.navParams.get('userId');
let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();
  
    customerDetPro.getCustumerDetails(userId).subscribe(data => {
     this.customer = data;
     this.events.publish("userLogedIn",this.customer);
      loader.dismiss();
    });
  }

  goToBalance() {
    this.navCtrl.setRoot(BalacesPage);
    
  }


}
