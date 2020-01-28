import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Socialcardp1PageRoutingModule } from './socialcardp1-routing.module';

import { Socialcardp1Page } from './socialcardp1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Socialcardp1PageRoutingModule
  ],
  declarations: [Socialcardp1Page]
})
export class Socialcardp1PageModule {}
