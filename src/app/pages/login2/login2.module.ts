import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Login2PageRoutingModule } from './login2-routing.module';

import { Login2Page } from './login2.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Login2PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Login2Page]
})
export class Login2PageModule {}
