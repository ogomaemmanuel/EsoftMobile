import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountsDetailsServiceProvider } from '../../providers/acconts-details-service/acconts-details-service';
import { ErrorAlertProvider } from '../../providers/error-alert/error-alert';
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


  constructor(private formBuilder1: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public accountsDetailsServiceProvider: AccountsDetailsServiceProvider,
    private errorAlertProvider: ErrorAlertProvider
  ) {
  }
  ionViewDidLoad() {

  }
  ngOnInit(): void {
    this.otpForm = this.formBuilder1.group({
      NewPin: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]')])],
      NewPinConfirm: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]')])]

    })

  }

  setNewPin() {
    this.accountsDetailsServiceProvider.ResetCustomerOtpPin("").subscribe(resp => {
      if (resp.ok) {

        

      }

    }, error => {
      this.errorAlertProvider.alertError("","");
    })


  }
}
