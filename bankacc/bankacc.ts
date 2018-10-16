import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransferPage } from '../transfer/transfer';

/**
 * Generated class for the BankaccPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bankacc',
  templateUrl: 'bankacc.html',
})
export class BankaccPage {

  saveButton: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.saveButton = TransferPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankaccPage');
  }

}
