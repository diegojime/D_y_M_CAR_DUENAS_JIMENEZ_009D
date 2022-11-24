import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Viaje1Page } from './viaje1.page';

const routes: Routes = [
  {
    path: '',
    component: Viaje1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Viaje1PageRoutingModule {}
