import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import { HttpModule } from "@angular/http";
import { CustomerProvider } from '../providers/customer/customer';
import { BalacesPage } from "../pages/balaces/balaces";
import { CustomerDetailsserviceProvider } from '../providers/customer-detailsservice/customer-detailsservice';
import { TrimPipe } from '../commonFunctions/TrimPipe';
import { AccountsDetailsServiceProvider } from '../providers/acconts-details-service/acconts-details-service';
import { IonicStorageModule } from '@ionic/storage';
import { BalancesDetailsPage } from '../pages/balances-details/balances-details';
import { MinistatementProvider } from '../providers/ministatement/ministatement';
import { MinistatementMenuPage } from '../pages/ministatement-menu/ministatement-menu';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    BalacesPage,
    TrimPipe,
    BalancesDetailsPage,
    MinistatementMenuPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    BalacesPage,
    BalancesDetailsPage,
    MinistatementMenuPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerProvider,
    CustomerDetailsserviceProvider,
    AccountsDetailsServiceProvider,
    MinistatementProvider,
   
  ]
})
export class AppModule {}
