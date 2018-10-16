import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabtabPage } from './tabtab';

@NgModule({
  declarations: [
    TabtabPage,
  ],
  imports: [
    IonicPageModule.forChild(TabtabPage),
  ],
})
export class TabtabPageModule {}
