import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitListPageRoutingModule } from './fruit-list-routing.module';

import { FruitListPage } from './fruit-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitListPageRoutingModule
  ],
  declarations: [FruitListPage]
})
export class FruitListPageModule {}
