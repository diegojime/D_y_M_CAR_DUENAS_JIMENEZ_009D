import { Component, OnInit } from '@angular/core';
import { menuController } from '@ionic/core';
import {AlertController, MenuController} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Registro2service, Usuario1 } from '../../services/registro2.service';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {

  formularioLogin: FormGroup;
  usuarios : Usuario1[] = [];

  constructor(private alertController: AlertController,
              private menucontroller: MenuController, 
              private navController: NavController,
              private registroService: Registro2service, 
              
              private loadingCtrl: LoadingController,
              private fb: FormBuilder) { 
                this.formularioLogin = this.fb.group({ 
                  'nombre' : new FormControl ("", Validators.required),
                  'correo' : new FormControl("", Validators.required),
                  'password' : new FormControl ("", Validators.required)
                  
                })
              }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }
  
  async Despedida() {
    const alert = await this.alertController.create({
      header: '¡Hasta luego!',
      message: 'Ha cerrado existosamente la Sesion',
      buttons: ['OK']
    });

    await alert.present();
  }
  async Ingresar(){
    var f = this.formularioLogin.value;
    var a=0;
    this.registroService.getUsuarios().then(datos=>{ 
      this.usuarios = datos; 
      if (!datos || datos.length==0){
        return null;
      }

      for (let obj of this.usuarios){
        if (f.correo == obj.correoUsuario && f.password==obj.passUsuario){
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado','true');
          this.navController.navigateRoot('usuario1');
        }
      }//findelfor
      if(a==0){
        this.alertMsg();
      }
    })
  }//findelmetodo

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error...',
      message: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }

}
