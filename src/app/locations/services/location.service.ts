import { Injectable } from '@angular/core';
import { Place } from '../models/place';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private locations :Place[]=[];

  constructor( private storage : Storage) { }

  public getLocations(){
    return this.storage.get('locations').then(data=>{
      this.locations=data != null?data:[];
      return this.locations.slice();
    });
  }

  public addLocation(location:Place){
    this.locations.push(location);
    this.updateLocation(this.locations);
  }

  public updateLocation(locations :Place[]){
    this.storage.set('locations', locations);
  }

  public currentLocation:Place;

}
