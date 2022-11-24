import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-auto2',
  templateUrl: './auto2.page.html',
  styleUrls: ['./auto2.page.scss'],
})
export class Auto2Page implements OnInit {

  constructor(private alertController: AlertController,
    private menuController: MenuController) { }

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
