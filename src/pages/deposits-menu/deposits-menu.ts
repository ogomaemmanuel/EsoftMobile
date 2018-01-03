import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DepositTransactionPage } from '../deposit-transaction/deposit-transaction';
import { AccountsDetailsServiceProvider } from '../../providers/acconts-details-service/acconts-details-service';

/**
 * Generated class for the DepositsMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deposits-menu',
  templateUrl: 'deposits-menu.html',
})
export class DepositsMenuPage {
private customer:any
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public accountdetailProv: AccountsDetailsServiceProvider,
    ) {
  }
  ngOnInit(): void {
    this.customer=this.navParams.get("customer");
      }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositsMenuPage');
  }
  getLoanAccounts(){ 
    this.accountdetailProv.getLoansAccountDetails(this.customer.tbl_CustomerID).subscribe(accounBalances=>{
    this.navCtrl.push(DepositTransactionPage,{accountDetails:accounBalances,accountCategory:"Loans Accounts",customer:this.customer});

  });
  }

  getSharesAccounts(){
    this.accountdetailProv.getSharesAccountDetails(this.customer.tbl_CustomerID).subscribe(accounBalances=>{
    this.navCtrl.push(DepositTransactionPage,{accountDetails:accounBalances,accountCategory:"Shares Accounts",customer:this.customer},);

  });
  }

  getSavingAccounts(){
    this.accountdetailProv.getSavingsAccountDetails(this.customer.tbl_CustomerID).subscribe(accounBalances=>{
      this.navCtrl.push(DepositTransactionPage,{accountDetails:accounBalances,accountCategory:"Savings Accounts",customer:this.customer});
  
    });
  }
}
