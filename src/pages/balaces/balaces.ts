import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { AccountsDetailsServiceProvider } from '../../providers/acconts-details-service/acconts-details-service';
import { AccountDetail } from '../../models/accountDetails';
import { BalancesDetailsPage } from '../balances-details/balances-details';
import { Http } from '@angular/http';
import { Customer } from '../../models/customer';

/**
 * Generated class for the BalacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-balaces',
  templateUrl: 'balaces.html',
  providers: [AccountsDetailsServiceProvider]
})
export class BalacesPage {
  public customer:Customer= new Customer();
  public x: any;
  public accountDetails: any;
  public accountDetails2:AccountDetail[]
  constructor(public events: Events, public http: Http, public modalCtrl: ModalController, public accountdetailProv: AccountsDetailsServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BalacesPage');
  }

  async getSavingsBalance() {
  
      let results= await this.accountdetailProv.getSavingsAccountDetails();
      console.log(results)

     //let modal = this.modalCtrl.create(BalancesDetailsPage,{accountDetails:this.accountDetails2 });
     //modal.present();
   

  
   
  
 
}

}
