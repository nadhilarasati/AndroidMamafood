import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TopmoneyPage } from '../topmoney/topmoney';
import { TransPage } from '../trans/trans';

/**
 * Generated class for the TopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topup',
  templateUrl: 'topup.html',
})
export class TopupPage {

  tButton: any;
  tuButton: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tButton = TransPage;
    this.tuButton = TopmoneyPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopupPage');
  }

}
