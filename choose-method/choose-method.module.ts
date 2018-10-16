import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseMethodPage } from './choose-method';

@NgModule({
  declarations: [
    ChooseMethodPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseMethodPage),
  ],
})
export class ChooseMethodPageModule {}
