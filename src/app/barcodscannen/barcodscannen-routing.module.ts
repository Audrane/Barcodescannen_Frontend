import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarcodscannenPage } from './barcodscannen.page';

const routes: Routes = [
  {
    path: '',
    component: BarcodscannenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarcodscannenPageRoutingModule {}
