import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddmenuPage } from '../addmenu/addmenu';


/**
 * Generated class for the HomepdgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homepdg',
  templateUrl: 'homepdg.html',
})
export class HomepdgPage {

  addButton: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.addButton = AddmenuPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepdgPage');
  }

}
