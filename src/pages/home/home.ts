import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { BalacesPage } from "../balaces/balaces";
import { Customer } from "../../models/customer";
import { CustomerDetailsserviceProvider } from "../../providers/customer-detailsservice/customer-detailsservice";
import { Events, AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MinistatementMenuPage } from '../ministatement-menu/ministatement-menu';
import { AtmCardsPage } from '../atm-cards/atm-cards';
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
export class HomePage implements OnInit {

  private customer: Customer;
  constructor(public menuCtrl: MenuController, public storage: Storage, public loadingCtrl: LoadingController, public events: Events, public customerDetPro: CustomerDetailsserviceProvider, public navCtrl: NavController, public navParams: NavParams) {

    //this.menuCtrl.enabled(true);

  }
  ionViewWillEnter() {
   
    this.menuCtrl.swipeEnable(true)
  }
  ngOnInit(): void {
    var userId = this.navParams.get('userId');
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();
    this.customerDetPro.getCustumerDetails(userId).subscribe(data => {
      this.customer = data;
      this.storage.set("customerDetails", JSON.stringify(this.customer))
      this.events.publish("userLogedIn", this.customer);
      loader.dismiss();
    });
  }

  goToBalance() {
    this.navCtrl.push(BalacesPage);

  }
  goToMiniStatementMenu() {
    this.navCtrl.push(MinistatementMenuPage);
  }

  goToAtmCards() {
    this.navCtrl.push(AtmCardsPage);
  }

}
