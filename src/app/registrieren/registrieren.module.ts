import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrierenPageRoutingModule } from './registrieren-routing.module';

import { RegistrierenPage } from './registrieren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrierenPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrierenPage]
})
export class RegistrierenPageModule {


  
}
