import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login'
import { HomePage } from "../pages/home/home";
import { CustomerDetailsserviceProvider } from "../providers/customer-detailsservice/customer-detailsservice";
import { Customer } from "../models/customer";
import { Events } from 'ionic-angular';
@Component({
  templateUrl: 'app.html',
  // providers:[ CustomerDetailsserviceProvider]
 // pipes:[]
})
export class MyApp {
  customer: Customer=new Customer();
  rootPage: any = LoginPage;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string, component: any }>;
  constructor(public events: Events, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
    this.pages = [
      { title: 'Home', component: HomePage },

    ];
    this.events.subscribe("userLogedIn", (data) => {
      this.customer = data;
    });
  }
}

