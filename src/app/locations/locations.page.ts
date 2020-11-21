import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Place } from './models/place';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

 public locations:Place []=[];
  constructor(private locationService:LocationService, private router:Router, 
              private alertCtrl: AlertController) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.onChargement();
  }

  onChargement(){
    this.locationService.getLocations().then(data=>{
      this.locations = data;
     })
  }

  onNewLocation(){
    console.log('on new location');
    this.router.navigateByUrl('/menu/new-location');
  }

  async onRemove(p:Place){

    let alert = await this.alertCtrl.create({
      header:'Confirmation',
      message: 'Etes-vous sure de vouloir supprimer ?',
      buttons: [
        {
          text: 'Oui',
          handler: () => {
            console.log(p);
            this.removeLocation(p);
          }
        },
        {
          text: 'Non',
          //role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await alert.present();
  }

  private removeLocation(location:Place){
    this.locations.splice(this.locations.indexOf(location), 1);
    this.locationService.updateLocation(this.locations);
  }

  onDetailLocation(p:Place){
    this.locationService.currentLocation = p;
    this.router.navigateByUrl('/menu/location-details');
  }

}
