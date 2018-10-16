import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the KonfirmasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-konfirmasi',
  templateUrl: 'konfirmasi.html',
})
export class KonfirmasiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KonfirmasiPage');
  }

  doAlert(){
    let alert = this.alerCtrl.create({
      title: 'Success!!',
      message: 'Transfer will be proceed in 24 hours',
      buttons: ['OK']
    });
    alert.present()
  }

}
