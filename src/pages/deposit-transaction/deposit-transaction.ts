import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AccountDetail } from '../../models/accountDetails';
import { DepositTransactionProvider } from '../../providers/deposit-transaction/deposit-transaction';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepositsMenuPage } from '../deposits-menu/deposits-menu';
import { HomePage } from '../home/home';
import { DeviceInfoProvider } from '../../providers/device-info/device-info';
import { CustomerProvider } from '../../providers/customer/customer';

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
  private accountDetails:any = [];
  private selectOptions: any;
  private depositFormGroup: FormGroup;
  public depositTrx: any;
  public customer:any;
  constructor(public navCtrl: NavController,
    public depositTransactionProvider: DepositTransactionProvider,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl:AlertController,
    public deviceInfoProvider:DeviceInfoProvider,
    public customerProvider: CustomerProvider,
       


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
    this.customerProvider.getLocallyStoredUser().then(user => {
      this.depositTrx = this.depositFormGroup.value;
      this.depositTrx.CustomerNo = this.navParams.get("customer").customerNo;
      this.depositTrx.DeviceInfo=this.deviceInfoProvider.getDevice();
      this.depositTrx.TellerLoginCode=user.loginCode;
      this.depositTransactionProvider.depositCash(this.depositTrx).subscribe(res => {
        if(res.ok){
          this.showRedirectDialog();
        }
      });
    })
  }

  showRedirectDialog(){
    let alert = this.alertCtrl.create({
      title: 'Deposit Money',
      message: 'Transaction posted Successfully,do you want to do another transaction for '+ this.navParams.get("customer").customerName,
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
