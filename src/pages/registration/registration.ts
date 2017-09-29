import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { RegistrationModel } from "../../models/registrationModel";


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

})
export class RegistrationPage {
  public registrationModel: RegistrationModel = new RegistrationModel();
  constructor(public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.menuCtrl.swipeEnable(false)
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
}
