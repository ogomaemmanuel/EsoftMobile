import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { HomePage } from "../../pages/home/home";

/*
  Generated class for the UserAuthProvider provider.
import { UserAuthProvider } from '../providers/user-auth/user-auth';
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class UserAuthProvider implements OnInit {
  userId: string = "7e8a41b8-cd73-4cee-956a-4ae693b8cf06";
  constructor(
    public events: Events,
    public http: Http, public navController: NavController,
    public alertCtrl: AlertController) {
    console.log('Hello UserAuthProvider Provider');
  }

  ngOnInit(): void {

  }
  public authenticateUser(pin: string, telephone: string) {
    return this.http.get("http://localhost:53725/customers/login?MobileNo=" +
      telephone + "&Pin=" + pin).map(res => res);
  }
}
