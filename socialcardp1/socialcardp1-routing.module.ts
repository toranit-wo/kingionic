import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Socialcardp1Page } from './socialcardp1.page';

const routes: Routes = [
  {
    path: '',
    component: Socialcardp1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Socialcardp1PageRoutingModule {}
