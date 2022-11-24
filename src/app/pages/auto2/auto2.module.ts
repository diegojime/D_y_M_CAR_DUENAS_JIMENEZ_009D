import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Auto2PageRoutingModule } from './auto2-routing.module';

import { Auto2Page } from './auto2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Auto2PageRoutingModule
  ],
  declarations: [Auto2Page]
})
export class Auto2PageModule {}
