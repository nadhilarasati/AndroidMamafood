import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabtabPage } from '../tabtab/tabtab';
import { TabpedagangPage } from '../tabpedagang/tabpedagang';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  SignUpButton: any;
  LogInButton: any;
  LogInPdgButton: any;
  constructor(public navCtrl: NavController) {
    this.SignUpButton = SignupPage;
    this.LogInButton= TabtabPage;
    this.LogInPdgButton= TabpedagangPage;
  }

}
