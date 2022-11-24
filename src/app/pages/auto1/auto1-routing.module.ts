import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Auto1Page } from './auto1.page';

const routes: Routes = [
  {
    path: '',
    component: Auto1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Auto1PageRoutingModule {}
