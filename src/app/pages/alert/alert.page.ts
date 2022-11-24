import {  OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})

export class AlertPage implements OnInit {

  handlerMessage='';
  roleMessage='';

  constructor(private alertController: AlertController, 
    private menuController: MenuController,
     private loadingCtrl: LoadingController)
     { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async Despedida() {
    const alert = await this.alertController.create({
      header: '¡Hasta luego!',
      message: 'Ha cerrado existosamente la Sesion',
      buttons: ['OK']
    });

    await alert.present();
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Espere un momento, su pago esta siendo procesado',
      duration: 3000,
    });

    loading.present();
  }



  //método que muestra un mensaje con botón Ok
  async Saludo() {
    const alert = await this.alertController.create({
      header: 'Saludo',
      message: 'Bienvenido a nuestra   App   D Y M   car',
      buttons: ['OK'],
    });

    await alert.present();
  }

  //método que muestra mensaje con dos botones de acción
  

  //método que ingresa datos 
  async Inputs() {
    const alert = await this.alertController.create({
      header: 'Ingrese sus datos',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Apellido',
         
        },
        {
          
          placeholder: 'Telefono',
         
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        
      ],
    });

    await alert.present();
  }


}
