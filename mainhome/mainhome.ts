import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the MainhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainhome',
  templateUrl: 'mainhome.html',
})
export class MainhomePage {

 

  DagingButton: any;
  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public storage: Storage) {
    this.DagingButton = NotificationPage;
  }


  ionViewDidLoad() {
    this.storage.get('token').then(val => {
      let res: Observable<any> = this.http.get('http://mamafood.com/api/login',{
        headers: {
          Authorization : val
        }
      })
      res.subscribe(data => {
        this.email = data.email;
      })
    }).catch(data => {
      console.log(data)
    });;
    
    
    
    //console.log('ionViewDidLoad MainhomePage');
  }


}
