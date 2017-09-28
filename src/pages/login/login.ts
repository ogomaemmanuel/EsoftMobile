import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserAuthProvider } from '../../providers/user-auth/user-auth';
import { AlertController, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';

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


  constructor(public menuCtrl: MenuController, public userAuthProvider: UserAuthProvider, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }
  ionViewWillEnter() {

    this.menuCtrl.swipeEnable(false)
  }

  ionViewDidLeave() {

    this.menuCtrl.swipeEnable(true)
  }
  authenticate() {

    //1) Validate the user
    //2) If valid redirect to home.
    this.userAuthProvider.authenticateUser(this.pin, this.telephone);

  }
}
