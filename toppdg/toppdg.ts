import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WithdrawPage } from '../withdraw/withdraw';

/**
 * Generated class for the ToppdgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toppdg',
  templateUrl: 'toppdg.html',
})
export class ToppdgPage {
  wdButton: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.wdButton = WithdrawPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToppdgPage');
  }

}
