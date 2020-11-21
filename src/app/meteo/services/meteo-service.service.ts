import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoServiceService {

  constructor(private httpClient:HttpClient) { }

  private meteoHost:string = "https://api.openweathermap.org/data/2.5/forecast?q="
  private meteoKey:string = "&units=imperial&type=accurate&APPID=ffdd58e2c0b917abe7137c942a1c1d67"
  loadMeteo(city:string){
    return this.httpClient.get(this.meteoHost+city+this.meteoKey);
  }

}
