import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChooseMethodPage } from '../choose-method/choose-method';

/**
 * Generated class for the OrdermenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ordermenu',
  templateUrl: 'ordermenu.html',
})
export class OrdermenuPage {

  nextButton: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nextButton = ChooseMethodPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdermenuPage');
  }

}
