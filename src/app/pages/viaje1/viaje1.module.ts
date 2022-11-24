import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Viaje1PageRoutingModule } from './viaje1-routing.module';

import { Viaje1Page } from './viaje1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Viaje1PageRoutingModule
  ],
  declarations: [Viaje1Page]
})
export class Viaje1PageModule {}
