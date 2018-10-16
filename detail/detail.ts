import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, Platform } from 'ionic-angular';
import { EditPage } from '../edit/edit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
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
  nama: String;
  email: String;
  noTelpon: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, public alertCtrl: AlertController, public platform: Platform, public http: HttpClient, public storage: Storage) {

  }

  openModal(){
    const myModal = this.modal.create(EditPage);

    myModal.present();
  }

  logoutConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Logout',
      message: 'Yakin keluar dari masakan mama?',
      buttons: [{
        text: "Yes",
        handler: () => { this.exitApp() }
      }, {
        text: "Cancel",
        role: 'cancel'
      }]
    });
    confirm.present();
  }

  exitApp(){
    this.platform.exitApp();
  }

  ionViewDidLoad() {
    this.storage.get('token').then(val => {
      let res: Observable<any> = this.http.get('http://mamafood.com/api/token',{
        headers: {
          Authorization : val
        }
      })
      res.subscribe(data => {
        this.nama = data.nama;
        this.email = data.email;
        this.noTelpon = data.noTelpon;
      })
    }).catch(data => {
      console.log(data)
    });;

    //console.log('ionViewDidLoad DetailPage');
  }

}
