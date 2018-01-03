import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerDetailsserviceProvider } from '../../providers/customer-detailsservice/customer-detailsservice';
import { DepositProductCategoryPage } from '../deposit-product-category/deposit-product-category';
import { DepositsMenuPage } from '../deposits-menu/deposits-menu';

/**
 * Generated class for the DepositMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deposit-main',
  templateUrl: 'deposit-main.html',
  providers:[CustomerDetailsserviceProvider]
})
export class DepositMainPage {
  customerFormGroup: FormGroup;
  constructor(
     public navCtrl: NavController,
     public navParams: NavParams, 
     public formBuilder: FormBuilder,
     public customerDetailsserviceProvider:CustomerDetailsserviceProvider,
     public alertCtrl: AlertController,
    ) {
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositMainPage');
  }

  ngOnInit(): void {
    this.customerFormGroup = this.formBuilder.group({
      
      CustomerNo: ['',Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]{1,6}'), Validators.required])],
    });
    }
  submit(){
    this.customerDetailsserviceProvider.getCustomerDetailsByNumber(this.customerFormGroup.value.CustomerNo).subscribe(resp=>{
if(resp.ok){
 this.confirmDeposit(resp.json());
  console.log("this is the response",resp.json());
}
else{
  console.log(resp.statusText);
}


    });

  }
//get customer details whose account is to be Deposited
  getCustomer(){


  }

  confirmDeposit(customer:any) {
    let alert = this.alertCtrl.create({
      title: 'Deposit Money',
      message: 'Do you want to Deposit money to '+ customer.customerName,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
         
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.push(DepositsMenuPage,{customer:customer});
          }
        }
      ]
    });
    alert.present();
  }
}
