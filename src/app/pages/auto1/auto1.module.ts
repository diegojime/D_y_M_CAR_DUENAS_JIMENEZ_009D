import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Auto1PageRoutingModule } from './auto1-routing.module';

import { Auto1Page } from './auto1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Auto1PageRoutingModule
  ],
  declarations: [Auto1Page]
})
export class Auto1PageModule {}
