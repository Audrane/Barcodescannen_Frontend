import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcodscannenPageRoutingModule } from './barcodscannen-routing.module';

import { BarcodscannenPage } from './barcodscannen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodscannenPageRoutingModule
  ],
  declarations: [BarcodscannenPage]
})
export class BarcodscannenPageModule {}
