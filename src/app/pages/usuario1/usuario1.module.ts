import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { Usuario1PageRoutingModule } from './usuario1-routing.module';

import { Usuario1Page } from './usuario1.page';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Usuario1PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Usuario1Page]
})
export class Usuario1PageModule {}
