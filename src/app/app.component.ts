import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login'
import { HomePage } from "../pages/home/home";
import { CustomerDetailsserviceProvider } from "../providers/customer-detailsservice/customer-detailsservice";
import { Customer } from "../models/customer";
import { Events, MenuController, AlertController } from 'ionic-angular';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { DepositMainPage } from '../pages/deposit-main/deposit-main';
import { CustomerProvider } from '../providers/customer/customer';

@Component({
  templateUrl: 'app.html',
  // providers:[ CustomerDetailsserviceProvider]
  // pipes:[]
})
export class MyApp {
  customer: Customer = new Customer();
  rootPage: any = LoginPage;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string, component: any }>;
  constructor(
    public menuCtrl: MenuController,
    public events: Events,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public customerProvider: CustomerProvider,
    public alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
    this.menuCtrl.swipeEnable(false)
    this.pages = [
      { title: 'Home', component: HomePage },

    ];
    this.events.subscribe("userLogedIn", (data) => {
      this.customer = data;
    });
  }
  openPageHomePage() {
    this.nav.setRoot(HomePage);
  }

  openContactUsPage() {
    this.menuCtrl.close();
    this.nav.push(ContactUsPage);
  }

  logout() {
    this.menuCtrl.close();
    this.nav.setRoot(LoginPage);
  }

  openDepositMainPage() {
    this.customerProvider.getLocallyStoredUser().then(user => {
      if (user.isTeller) {
        this.menuCtrl.close();
        this.nav.setRoot(DepositMainPage);
      } else {
        
          let alert = this.alertCtrl.create({
            title: 'Not Teller',
            subTitle: 'You are not authorised to deposit Cash',
            buttons: ['Dismiss']
          });
          alert.present();
      }
    })
  }
}

