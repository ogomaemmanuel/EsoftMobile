import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login'
import { HomePage } from "../pages/home/home";
import { Customer } from "../models/customer";
import { Events, MenuController, AlertController } from 'ionic-angular';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { DepositMainPage } from '../pages/deposit-main/deposit-main';
import { CustomerProvider } from '../providers/customer/customer';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html',
  // providers:[ CustomerDetailsserviceProvider]
  // pipes:[]
})
export class MyApp {
  customer: Customer = new Customer();
  rootPage: any = LoginPage;
  @ViewChild(Nav) nav: Nav;
  pageSettings: Array<{ title: string, page: any,icon:string }>;
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
    this.pageSettings = [
      { title: 'Home', page: HomePage,icon:"ios-home-outline" },
      { title: 'Settings', page: SettingsPage,icon:"ios-settings-outline" },
      { title: 'Contact Us', page: ContactUsPage,icon:"ios-call-outline" },
      { title: 'Deposit Cash', page: DepositMainPage,icon:"ios-cash-outline" },
      { title: 'Logout', page: LoginPage,icon:"ios-log-out" },

    ];
    this.events.subscribe("userLogedIn", (data) => {
      this.customer = data;
      if(!this.customer.isTeller){
        if(this.pageSettings[3].page==DepositMainPage){
        this.pageSettings.splice(3,1);
        }
      }
    });
  }
  openPageHomePage() {
    this.menuCtrl.close();
    this.nav.setRoot(HomePage);
  }

  openContactUsPage() {
    this.menuCtrl.close();
    this.nav.push(ContactUsPage);
  }
  openDepositMainPage() {
    this.customerProvider.getLocallyStoredUser().then(user => {
      if (user.isTeller) {
        this.menuCtrl.close();
        this.nav.push(DepositMainPage);
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

  logout() {
    this.menuCtrl.close();
    this.nav.setRoot(LoginPage);
  }

  openPage(pageSetting) {
    this.menuCtrl.close();
    if (pageSetting.page == HomePage|| pageSetting.page == LoginPage) {
      this.nav.setRoot(pageSetting.page);
    }
    else if (pageSetting.page == DepositMainPage) {
      this.openDepositMainPage()
    }
    else
      this.nav.push(pageSetting.page);
  }
}

