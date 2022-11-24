import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Auto2Page } from './auto2.page';

const routes: Routes = [
  {
    path: '',
    component: Auto2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Auto2PageRoutingModule {}
