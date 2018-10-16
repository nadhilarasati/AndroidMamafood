import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BankaccPage } from '../bankacc/bankacc';

/**
 * Generated class for the WithdrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-withdraw',
  templateUrl: 'withdraw.html',
})
export class WithdrawPage {

  transButton: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transButton = BankaccPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawPage');
  }

}
