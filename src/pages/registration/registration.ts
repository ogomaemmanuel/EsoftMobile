import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { RegistrationModel } from "../../models/registrationModel";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsDetailsServiceProvider } from '../../providers/acconts-details-service/acconts-details-service';
import { LoginPage } from '../login/login';


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

  registrationModel:RegistrationModel;
  registrationModelFormGroup: FormGroup;
  submitAttempt: boolean = false;
  constructor(
    public accountsDetailsServiceProvider: AccountsDetailsServiceProvider,
     public menuCtrl: MenuController,
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public formBuilder: FormBuilder,
      public toastCtrl: ToastController,
    ) {
    
  }

  ngOnInit(): void {
    this.registrationModel= new RegistrationModel()
    this.registrationModelFormGroup = this.formBuilder.group({
      MobileNo: [''],
      CustomerName: [''],
      CustomerNo: [''],
      Email: [''],
      IdNo: [''],
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
  registerUser() {
    console.log(this.registrationModelFormGroup.value);
    this.accountsDetailsServiceProvider.registerNewUser(this.registrationModelFormGroup.value).subscribe(resp => {
      console.log(resp);
if(resp===true){
  let toast = this.toastCtrl.create({
    message: "Registration successful",
    duration: 3000,
    position:'middle'
  });
  toast.present();
  this.navCtrl.setRoot(LoginPage)
}

    }); 
    //this.submitAttempt = true;



  }
}
