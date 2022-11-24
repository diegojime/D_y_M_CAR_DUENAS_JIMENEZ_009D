import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuario1{
  nomUsuario: string;
  correoUsuario:string;
  passUsuario:string;
  repassUsuario: string; 
}

const USERS_KEY = 'my-pasajeros';

@Injectable({
  providedIn: 'root'
})
export class Registro2service {

  private _storage: Storage;

  constructor(private storage: Storage) { 
    this.init();
   }

   //creamos el storage de Usuarios
    async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //creamos un Usuario
  async addUsuario(dato: Usuario1):Promise<any>{
   return this.storage.get(USERS_KEY).then((datos: Usuario1[])=>{ 
     if(datos){
       datos.push(dato);    //agregamos un objeto al storage
       return this.storage.set(USERS_KEY,datos);
     }
     else{
       return this.storage.set(USERS_KEY, [dato]);
     }
   })
  }//findelmetodo

  //obtener todos los objetos desde el storage 
  async getUsuarios():Promise<Usuario1[]>{
    return this.storage.get(USERS_KEY);
  }


}

