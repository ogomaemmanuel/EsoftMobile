import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MinistatementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ministatement',
  templateUrl: 'ministatement.html',
})
export class MinistatementPage implements OnInit {
  public ministatements: any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit(): void {
    this.ministatements = this.navParams.get("ministatements");
    console.log("these are the statements", this.ministatements);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MinistatementPage');
  }

}
