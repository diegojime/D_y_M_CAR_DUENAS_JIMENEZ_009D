import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Usuario1Page } from './usuario1.page';

const routes: Routes = [
  {
    path: '',
    component: Usuario1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Usuario1PageRoutingModule {}