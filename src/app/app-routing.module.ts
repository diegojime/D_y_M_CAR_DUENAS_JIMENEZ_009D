import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[IngresadoGuard]
    
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'inputs',
    loadChildren: () => import('./pages/inputs/inputs.module').then( m => m.InputsPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'registro-alumno',
    loadChildren: () => import('./pages/registro-alumno/registro-alumno.module').then( m => m.RegistroAlumnoPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'usuario1',
    loadChildren: () => import('./pages/usuario1/usuario1.module').then( m => m.Usuario1PageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'auto1',
    loadChildren: () => import('./pages/auto1/auto1.module').then( m => m.Auto1PageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'viaje1',
    loadChildren: () => import('./pages/viaje1/viaje1.module').then( m => m.Viaje1PageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'viaje2',
    loadChildren: () => import('./pages/viaje2/viaje2.module').then( m => m.Viaje2PageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'auto2',
    loadChildren: () => import('./pages/auto2/auto2.module').then( m => m.Auto2PageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'registro2',
    loadChildren: () => import('./pages/registro2/registro2.module').then( m => m.Registro2PageModule),
    canActivate:[IngresadoGuard]

  },
  
  {
    path: 'login2',
    loadChildren: () => import('./pages/login2/login2.module').then( m => m.Login2PageModule),
    canActivate:[IngresadoGuard]
    
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


