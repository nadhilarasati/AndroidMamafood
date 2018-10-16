import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the BuypromoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buypromo',
  templateUrl: 'buypromo.html',
})
export class BuypromoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuypromoPage');
  }
  doAlert(){
    let alert = this.alerCtrl.create({
      title: 'Purchased Success!!',
      message: 'If your account does not appear in our social media in 24 hours, please contact our customer service',
      buttons: ['OK']
    });
    alert.present()
  }
}
