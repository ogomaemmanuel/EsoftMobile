import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController, AlertController } from 'ionic-angular';
import { RegistrationModel } from "../../models/registrationModel";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsDetailsServiceProvider } from '../../providers/acconts-details-service/acconts-details-service';
import { LoginPage } from '../login/login';
import { Device } from '@ionic-native/device';


/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
  providers: [AccountsDetailsServiceProvider]
})
export class RegistrationPage implements OnInit {

  registrationModel: RegistrationModel;
  registrationModelFormGroup: FormGroup;
  submitAttempt: boolean = false;
  constructor(
    public accountsDetailsServiceProvider: AccountsDetailsServiceProvider,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private device:Device,
  ) {

  }

  ngOnInit(): void {
    this.registrationModel = new RegistrationModel()
    this.registrationModelFormGroup = this.formBuilder.group({
      CustomerNo: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{1,6}')])],
      IdNo: ['', Validators.compose([Validators.required, Validators.pattern('^\\w+$')])],
      //idNo: ['',Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]{5-10}'), Validators.required])],
    });
  }

  ionViewDidLoad() {
    this.menuCtrl.swipeEnable(false)
  }
  ionViewWillEnter() {

    this.menuCtrl.swipeEnable(false)
  }

  ionViewDidLeave() {

    this.menuCtrl.swipeEnable(false)
  }
  submit() {
    this.submitAttempt = true;
    let registrationDetails=this.registrationModelFormGroup.value;
    registrationDetails.DeviceInfo= this.device.uuid;
    this.accountsDetailsServiceProvider.registerNewUser(registrationDetails)
      .subscribe(resp => {
        if (resp.ok) {
          console.log("The ok response message is ", resp.json());
          let toast = this.toastCtrl.create({
            message: resp.json(),
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          this.navCtrl.setRoot(LoginPage)
        }
      }, error => {
        if (error.status == 400) {

          let erroMessages = JSON.parse(error._body);
          this.alertErrorMessage(erroMessages);
        }
        else {
          this.alertErrorMessage("There was an error in Registration,retry or visit your nearest branch for help");
        }
        
      });
  }

  alertErrorMessage(alertMessage: string) {
    console.log("alert Message is ", alertMessage);
    let alert = this.alertCtrl.create({
      title: "Registration Error",
      message: alertMessage,
      mode: 'md'
    });
    alert.present();

  }
}
