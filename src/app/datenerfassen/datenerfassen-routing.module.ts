import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatenerfassenPage } from './datenerfassen.page';

const routes: Routes = [
  {
    path: '',
    component: DatenerfassenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatenerfassenPageRoutingModule {}
