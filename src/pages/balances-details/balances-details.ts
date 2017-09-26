import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AccountDetail } from '../../models/accountDetails';

/**
 * Generated class for the BalancesDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-balances-details',
  templateUrl: 'balances-details.html',
  providers: []
})
export class BalancesDetailsPage {
  public accountDetails: AccountDetail[] = [];
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.accountDetails = this.navParams.get('accountDetails');
    console.log("accountDetails passed",this.accountDetails.length )
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BalancesDetailsPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
