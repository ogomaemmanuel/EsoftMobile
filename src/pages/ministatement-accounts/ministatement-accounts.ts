import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MinistatementProvider } from '../../providers/ministatement/ministatement';
import { CustomerProvider } from '../../providers/customer/customer';
import { ProductsView } from '../../models/productsView';
import { MiniStatement } from '../../models/ministatementModel';
import { MinistatementPage } from '../ministatement/ministatement';

/**
 * Generated class for the MinistatementAccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ministatement-accounts',
  templateUrl: 'ministatement-accounts.html',
  providers: [MinistatementProvider, CustomerProvider]
})
export class MinistatementAccountsPage implements OnInit {
  customerAccounts: ProductsView[] = [];
  accountType: any;
  miniStatements: MiniStatement[] = []
  constructor(
    public customerProvider: CustomerProvider,
    public ministatementProvider: MinistatementProvider,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams) {

  }

  ngOnInit(): void {
    console.log("Nav Parameres", this.navParams.get("accounts"));
    this.customerAccounts = this.navParams.get("accounts");
    this.accountType = this.navParams.get("accountType");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinistatementAccountsPage');
  }

  getMiniStatement(accountNo: any) {
    console.log("the account", accountNo);
    if (this.accountType === "Loans Accounts") {
      this.getLoansMiniStatement(accountNo);
    }
    if (this.accountType === "Savings Accounts") {
      this.getSavingMinistatentAccounts(accountNo);
    }
    if (this.accountType === "Shares Accounts") {
      this.getSharesMiniStatement(accountNo)
    }

  }

  getSavingMinistatentAccounts(account: string) {
    let loader = this.loadingCtrl.create({
      content: "loading...",
    });
    loader.present();
    this.customerProvider.getLocallyStoredUserId().then(userId => {
      this.ministatementProvider.getSavingsMiniStatement(userId, account).subscribe(ministatementsObject => {
        this.miniStatements = ministatementsObject;
        loader.dismiss();
        console.log("Ministatemens from api", this.miniStatements, "Accpunts");
        this.navCtrl.push(MinistatementPage, { ministatements: this.miniStatements });
      })
    });
  }

  getSharesMiniStatement(account: string) {
    let loader = this.loadingCtrl.create({
      content: "loading...",
    });
    loader.present();
    this.customerProvider.getLocallyStoredUserId().then(userId => {
      this.ministatementProvider.getSharesMiniStatement(userId, account).subscribe(ministatementsObject => {
        this.miniStatements = ministatementsObject;
        loader.dismiss();
        console.log("Ministatemens from api", this.miniStatements, "Accpunts");
        this.navCtrl.push(MinistatementPage, { ministatements: this.miniStatements });
      })
    });

  }


  getLoansMiniStatement(account: string) {
    let loader = this.loadingCtrl.create({
      content: "loading...",
    });
    loader.present();
    this.customerProvider.getLocallyStoredUserId().then(userId => {
      this.ministatementProvider.getLoansMiniStatement(userId, account).subscribe(ministatementsObject => {
        this.miniStatements = ministatementsObject;
        loader.dismiss();
        console.log("Ministatemens from api", this.miniStatements, "Accpunts");
        this.navCtrl.push(MinistatementPage, { ministatements: this.miniStatements });
      })
    });
  }
}
