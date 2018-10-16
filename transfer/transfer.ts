import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KonfirmasiPage } from '../konfirmasi/konfirmasi';

/**
 * Generated class for the TransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {

  confButton: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.confButton = KonfirmasiPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferPage');
  }

}
