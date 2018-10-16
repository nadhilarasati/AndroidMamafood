import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditpdgPage } from '../editpdg/editpdg';
import { ToppdgPage } from '../toppdg/toppdg';
import { BuypromoPage } from '../buypromo/buypromo';

/**
 * Generated class for the ProfpdgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profpdg',
  templateUrl: 'profpdg.html',
})
export class ProfpdgPage {

  tab1Root = EditpdgPage;
  tab2Root = ToppdgPage;
  tab3Root = BuypromoPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfpdgPage');
  }

}
