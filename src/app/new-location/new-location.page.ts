import { Component, OnInit } from '@angular/core';
import { Place } from '../locations/models/place';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationService } from '../locations/services/location.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.page.html',
  styleUrls: ['./new-location.page.scss'],
})
export class NewLocationPage implements OnInit {

  constructor(private geolocation:Geolocation, private locationService:LocationService,
              private navCtrl:NavController) { }

  ngOnInit() {
  }

  onAddLocation(data:Place){
    data.timestamp = new Date().getTime();
    data.photos = [];
    this.geolocation.getCurrentPosition().then(result=>{
      data.coordinates = {
        latitude : result.coords.longitude,
        longitude: result.coords.latitude
      }
      console.log(data);
      this.locationService.addLocation(data);
      this.navCtrl.back();
    });
  }
}
