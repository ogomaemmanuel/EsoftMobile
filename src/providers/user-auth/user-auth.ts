import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import {NavController } from 'ionic-angular';
 
import 'rxjs/add/operator/map';
import { HomePage } from "../../pages/home/home";

/*
  Generated class for the UserAuthProvider provider.
import { UserAuthProvider } from '../providers/user-auth/user-auth';
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class UserAuthProvider {
 userId:string="7e8a41b8-cd73-4cee-956a-4ae693b8cf06";
  constructor(public http: Http,public navController:NavController,public alertCtrl: AlertController) {
    console.log('Hello UserAuthProvider Provider');
  }
public authenticateUser(password:string,telephone:string){
  if(password=="1234" && telephone=="1234"){
    this.navController.setRoot(HomePage,{userId:this.userId})
  }
  else{
    let alert = this.alertCtrl.create({
      title: "Login Error",
      subTitle: "Edit Details and sign in",
      buttons: ['OK']
    });
    alert.present();
  }

}
}
