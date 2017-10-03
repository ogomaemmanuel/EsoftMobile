import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserAuthProvider } from '../../providers/user-auth/user-auth';
import { AlertController, MenuController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { RegistrationPage } from '../registration/registration';
import { HomePage } from '../home/home';
import { ContactUsPage } from '../contact-us/contact-us';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserAuthProvider]
})
export class LoginPage {
  public telephone: string;
  public pin: string;


  constructor(public menuCtrl: MenuController,
    public userAuthProvider: UserAuthProvider,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
    // this.menuCtrl.enabled=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menuCtrl.swipeEnable(false)

  }
  ionViewWillEnter() {

    this.menuCtrl.swipeEnable(false)
  }

  ionViewDidLeave() {

    this.menuCtrl.swipeEnable(false)
  }
  authenticate() {

    //1) Validate the user
    //2) If valid redirect to home.
    //var loginStatus=false;
    this.userAuthProvider.authenticateUser(this.pin, this.telephone).subscribe(loginStatus => {
      if (loginStatus.status ==="Success") {
        console.log("Successful login",loginStatus);
        this.navCtrl.setRoot(HomePage, { userId: loginStatus.user.tbl_CustomerId });

      }

      else {
        console.log("Login error object",loginStatus);
        this.presentToast(loginStatus.message)
      }
    });
  }
  goToRegistrationPage() {
    this.navCtrl.push(RegistrationPage)
  }

  goToContactUsPage(){
    this.navCtrl.push(ContactUsPage);
  }
  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position:'middle'
    });
    toast.present();
  }
}
