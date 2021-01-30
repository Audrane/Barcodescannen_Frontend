import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KundePageRoutingModule } from './kunde-routing.module';

import { KundePage } from './kunde.page';
//import { Badge } from '@ionic-native/badge';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KundePageRoutingModule
  ],
  declarations: [KundePage]
})
export class KundePageModule {}
