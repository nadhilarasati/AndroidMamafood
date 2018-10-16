import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChangepassPage } from '../changepass/changepass';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  ChangePassButton: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ChangePassButton = ChangepassPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
