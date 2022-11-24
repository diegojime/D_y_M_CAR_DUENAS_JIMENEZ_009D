import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-auto1',
  templateUrl: './auto1.page.html',
  styleUrls: ['./auto1.page.scss'],
})
export class Auto1Page implements OnInit {

  constructor(private menuController: MenuController,
    private alertController: AlertController) { }


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
}
