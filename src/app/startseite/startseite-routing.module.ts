import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartseitePage } from './startseite.page';

const routes: Routes = [
  {
    path: '',
    component: StartseitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartseitePageRoutingModule {}
