import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatenerfassenPageRoutingModule } from './datenerfassen-routing.module';

import { DatenerfassenPage } from './datenerfassen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatenerfassenPageRoutingModule
  ],
  declarations: [DatenerfassenPage]
})
export class DatenerfassenPageModule {}
