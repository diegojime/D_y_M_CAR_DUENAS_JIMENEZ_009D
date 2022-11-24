import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  constructor(private menuController: MenuController, 
    private loadingCtrl: LoadingController,
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
  
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Espere un momento...',
      duration: 3000,
    });

    loading.present();
  }


  usuario = {
    nombre:'',
    email: '',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
  
}
