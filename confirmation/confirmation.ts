import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html',
})
export class ConfirmationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
    
  }

  doAlert(){
    let alert = this.alerCtrl.create({
      title: 'Success!!',
      message: 'Your password is successfully changed!',
      buttons: ['OK']
    });
    alert.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationPage');
  }

}
