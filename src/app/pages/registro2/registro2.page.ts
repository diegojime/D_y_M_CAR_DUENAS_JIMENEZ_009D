import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Registro2service, Usuario1 } from '../../services/registro2.service';
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.page.html',
  styleUrls: ['./registro2.page.scss'],
})
export class Registro2Page implements OnInit {

  formularioRegistro: FormGroup; 
  newUsuario: Usuario1 = <Usuario1>{};
  usuario1: Usuario1[]  =[];


  constructor(private alertController: AlertController,
              private registro2Service: Registro2service,
              private navcontroller: NavController,
              private menuController: MenuController,
              private toast: ToastController, 
              private fb:FormBuilder) {
                this.formularioRegistro = this.fb.group({
                  'nombre' : new FormControl("", Validators.required), 
                  'correo' : new FormControl("", [Validators.required, Validators.email]), 
                  
                  'password': new FormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(8),
                   
                  ])), 
                  'confirmaPass': new FormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(8),
                    
                  ])),
        });
      }
          

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
  

  async CrearUsuario1(){
    var form = this.formularioRegistro.value;
    var existe =0;


    if (this.formularioRegistro.invalid){
      this.alertError();
    }
    else{
      this.newUsuario.nomUsuario=form.nombre;
      this.newUsuario.correoUsuario=form.correo;
      this.newUsuario.passUsuario = form.password;
      this.newUsuario.repassUsuario=form.confirmaPass;
  
      this.registro2Service.getUsuarios().then(datos=>{
      this.usuario1 = datos;
      
  
  
      if (!datos || datos.length==0){
        this.registro2Service.addUsuario(this.newUsuario).then(dato=>{
  
        
  
        
          this.newUsuario=<Usuario1>{};
          this.showToast('Usuario Creado satisfactoriamente');
        });
        this.formularioRegistro.reset();
        this.navcontroller.navigateRoot('login');
      }else{
      
      for (let obj of this.usuario1){
        if (this.newUsuario.correoUsuario == obj.correoUsuario){
          existe = 1;
        }
      }//Fin del for
    
        if (existe == 1){
          this.alertCorreoDuplicado();
          this.formularioRegistro.reset();
        }
        else{
          this.registro2Service.addUsuario(this.newUsuario).then(dato=>{ 
            this.newUsuario=<Usuario1>{};
            this.showToast('Usuario Creado satisfactoriamente');
          });
          this.formularioRegistro.reset();
          this.navcontroller.navigateRoot('login');
        }
      }
      })          
    
    }//finelse
  
    }//findelmetodo
  
    async alertError(){
      const alert = await this.alertController.create({ 
        header: 'Error..',
        message: 'Debe completar todos los datos',
        buttons: ['Aceptar']
      })
      await alert.present();
    }
  
  
    async showToast(msg){
      const toast = await this.toast.create({
        message: msg,
        duration: 2000
      })
      await toast.present();
    }
  
    async alertCorreoDuplicado(){
      const alert = await this.alertController.create({ 
        header: '¡Error!',
        message: 'El correo ingresado ya existe',
        buttons: ['Aceptar']
      })
      await alert.present();
    }

    async salir() {
      const alert = await this.alertController.create({
        header: 'Salir',
        message: 'a salido con exito',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
  
  
  }