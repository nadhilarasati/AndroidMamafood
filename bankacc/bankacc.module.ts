import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankaccPage } from './bankacc';

@NgModule({
  declarations: [
    BankaccPage,
  ],
  imports: [
    IonicPageModule.forChild(BankaccPage),
  ],
})
export class BankaccPageModule {}
