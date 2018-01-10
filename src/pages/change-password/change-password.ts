import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AccountsDetailsServiceProvider } from '../../providers/acconts-details-service/acconts-details-service';
import { ErrorAlertProvider } from '../../providers/error-alert/error-alert';

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage implements OnInit {
  private changePinFormGroup: FormGroup
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private accountsDetailsServiceProvider: AccountsDetailsServiceProvider,
    private alertCtrl: AlertController,
    private errorAlertProvider: ErrorAlertProvider
  ) {
  }

  ngOnInit(): void {
    this.changePinFormGroup = this.formBuilder.group({
      OldPin: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{1,}')])],
      NewPin: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{1,}')])],
      ConfirmPin: ['', Validators.required, Validators.pattern('[0-9]{1,}')]
    });
  }
  ionViewDidLoad() {

  }
  changeOldPin() {
    this.accountsDetailsServiceProvider.ChangeCustomerPin('').subscribe(resp => {
      if (resp.ok) {
        let alert = this.alertCtrl.create({
          message: "pin successfully changed",
          buttons: ['ok']
        })
        alert.present();
      }
    }, error => {
      this.errorAlertProvider.alertError("", "Password Update Error");
      

    })

  }
}
