import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the ErrorAlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ErrorAlertProvider {

  constructor(private alertCtrl: AlertController) {
  }

  public alertError(errorMessage: string) {
    this.buildErrorMessage(errorMessage);
  }
  private buildErrorMessage(alertMessage: string) {
    console.log("alert Message is ", alertMessage);
    let alert = this.alertCtrl.create({
      title: "Registration Error",
      message: alertMessage,
      mode: 'md'
    });
    alert.present();
  }
}
