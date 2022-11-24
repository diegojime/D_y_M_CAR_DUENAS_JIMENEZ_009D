import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import{ AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
declare var google;


interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  map =null
  markers: Marker[] = [
    {
      position: {
        lat: -33.4569400,
        lng: -70.6482700,
      },
      title: 'cementerio general'
    },
    {
      position: {
        lat: -33.4569400,
        lng: -70.6482700,
      },
      title: 'plaza ñuñoa'
    },
    {
      position: {
        lat: -33.4569400,
        lng: -70.6482700,
      },
      title: 'cerrillos'
    },
    {
      position: {
        lat: -33.4569400,
        lng: -70.6482700,
      },
      title: 'providencia'
    },
  ];


  constructor(private menuController: MenuController, 
    private alertController: AlertController,
    private loadingCtrl: LoadingController) { }
    

  
  loadMap() {
    
    const mapEle: HTMLElement = document.getElementById('map');
    
    const myLatLng = {lat: -33.4569400, lng: -70.6482700};
    
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => { 
      mapEle.classList.add('show-map');
      this.renderMarkers();
      
    });
  
    
}

renderMarkers() {
  this.markers.forEach(marker => {
    this.addMarker(marker);
  });
}
addMarker(marker: Marker) {
  return new google.maps.Marker({
    position: marker.position,
    map: this.map,
    title: marker.title
  });
  
}

  ngOnInit() {
    this.loadMap();
  
   
  }
  


  
  mostrarMenu(){
    this.menuController.open('first');
  }
  async Despedida() {

    if(localStorage.getItem('íngresado'))
    {
      localStorage.clear();
    }


    /*
    const alert = await this.alertController.create({
      header: '¡Hasta luego!',
      message: 'Ha cerrado existosamente la Sesion',
      buttons: ['OK']
    });

    await alert.present();*/

  }
  
  
  
//método que muestra un mensaje con botón Ok

//método que muestra un mensaje con botón Ok
async salir() {
  const alert = await this.alertController.create({
    header: 'Salir',
    message: 'a salido con exito',
    buttons: ['OK'],
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


}

