import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KundenformularPageRoutingModule } from './kundenformular-routing.module';

import { KundenformularPage } from './kundenformular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KundenformularPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [KundenformularPage]
})
export class KundenformularPageModule {}
