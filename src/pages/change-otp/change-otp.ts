import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountsDetailsServiceProvider } from '../../providers/acconts-details-service/acconts-details-service';
import { ErrorAlertProvider } from '../../providers/error-alert/error-alert';
import { PasswordValidation } from '../../commonFunctions/EqualValidator';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
/**
 * Generated class for the ChangeOtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-otp',
  templateUrl: 'change-otp.html',
})
export class ChangeOtpPage implements OnInit {
  
  public otpForm: FormGroup;
  public showPinError: boolean = false;
  private userId: string;
  constructor(private formBuilder1: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl:AlertController,
    public accountsDetailsServiceProvider: AccountsDetailsServiceProvider,
    private errorAlertProvider: ErrorAlertProvider
  ) {
  }
  ionViewDidLoad() {

  }
  ngOnInit(): void {
    this.userId = this.navParams.get("userId");
    this.otpForm = this.formBuilder1.group({
      NewPin: ['', Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(4), Validators.pattern('[0-9]{1,}')])],
      ConfirmPin: ['', Validators.compose([Validators.required,Validators.maxLength(4),Validators.minLength(4), Validators.pattern('[0-9]{1,}')])],
      //showPinError:[false]
    })
  }

  setNewPin() {
    if (this.otpForm.value["NewPin"] != this.otpForm.value["ConfirmPin"]) {
      this.showPinError = true;
    }
    else {
      let pinDetails=this.otpForm.value;
      pinDetails.userId=this.userId;
      this.accountsDetailsServiceProvider.ResetCustomerOtpPin(pinDetails).subscribe(resp => {
        if (resp.ok) {
          console.log("New pin has been set successfully")
          this.alertCtrl.create({
            message:"New pin has been set successfully",
            buttons:[{
              text:'ok',
              handler:()=>{
                this.navCtrl.setRoot(LoginPage);
              }
            }]
          })
        }
      }, error => {
        this.errorAlertProvider.alertError("", "");
      })
    }


  }
}
