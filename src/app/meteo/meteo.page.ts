import { Component, OnInit } from '@angular/core';
import { MeteoModel } from './models/meteo-model';
import { MeteoServiceService } from './services/meteo-service.service';
import { CatalogueServiceService } from '../services/catalogue-service.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {

  constructor(private meteoServiceService:MeteoServiceService, private cs:CatalogueServiceService) { }


  city:string='annaba';

  ngOnInit() {
  }

  meteoModel:MeteoModel;

  onLoadMeteo(){
    this.meteoServiceService.loadMeteo(this.city).subscribe(data=>{
      this.meteoModel = data as MeteoModel;
      this.cs.openSnackBar('Resultat', 'OK');
    }, err=>{
      console.error(err);
      this.cs.openSnackBar('Erreur', err.message);
    })
  }

}
