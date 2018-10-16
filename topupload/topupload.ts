import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the TopuploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topupload',
  templateUrl: 'topupload.html',
})
export class TopuploadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  doAlert(){
    let alert = this.alerCtrl.create({
      title: 'Upload Success!!',
      message: 'Your top up will be procceed in 24 hours',
      buttons: ['OK']
    });
    alert.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopuploadPage');
  }

}
