import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [
    {
      
      icon: 'finger-print-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    {

      icon: 'car-sport-outline',
      name: 'Viajes Hechos',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'journal-outline',
      name: 'Pagos',
      redirecTo: '/alert'
    },
    {
      icon: 'calendar-outline',
      name: 'Feriados',
      redirecTo: '/feriados'
    },
    
    {
      icon: 'chatbox-outline',
      name: 'Informacion Adicional',
      redirecTo: '/informacion'
    }, 
    


  ];
  



}
