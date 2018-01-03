import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AccountDetail } from '../../models/accountDetails';
import { DepositTransactionProvider } from '../../providers/deposit-transaction/deposit-transaction';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepositsMenuPage } from '../deposits-menu/deposits-menu';
import { HomePage } from '../home/home';

/**
 * Generated class for the DepositTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deposit-transaction',
  templateUrl: 'deposit-transaction.html',
})
export class DepositTransactionPage implements OnInit {
  private accountDetails: AccountDetail[] = [];
  private selectOptions: any;
  private depositFormGroup: FormGroup;
  public depositTrx: any;
  public customer:any;
  constructor(public navCtrl: NavController,
    public depositTransactionProvider: DepositTransactionProvider,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl:AlertController

  ) {
  }
  ngOnInit(): void {
    this.accountDetails = this.navParams.get('accountDetails');
    this.customer=this.navParams.get("customer");
    console.log("accountDetails in deposit-transaction.ts", this.accountDetails);
    this.selectOptions = {
      subTitle: 'Customer ' + this.navParams.get("accountCategory"),
      mode: 'md'
    };

    this.depositFormGroup = this.formBuilder.group({
      ProductCode: ['', Validators.compose([Validators.required])],
      //CustomerNo: ['',Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]{1-6}'), Validators.required])],
      TrxAmount: ['0.00', Validators.compose([Validators.pattern('^[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$'), Validators.required])],
      TellerLoginCode: [''],
      //idNo: ['',Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]{5-10}'), Validators.required])],
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositTransactionPage');
  }
  submit() {
    this.depositTrx = this.depositFormGroup.value;
    this.depositTrx.CustomerNo = this.navParams.get("customer").customerNo;
    this.depositTransactionProvider.depositCash(this.depositTrx).subscribe(res => {
      console.log(res);
      if(res.ok){
        this.showRedirectDialog();
      }
    });
  }

  showRedirectDialog(){
    let alert = this.alertCtrl.create({
      title: 'Deposit Money',
      message: 'Do you want to do another transaction for '+ this.navParams.get("customer").customerName,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.navCtrl.setRoot(HomePage);
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.push(DepositsMenuPage,{customer:this.customer});
          }
        }
      ]
    });
    alert.present();
  }
}
