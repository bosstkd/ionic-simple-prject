import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationDetailsPageRoutingModule } from './location-details-routing.module';

import { LocationDetailsPage } from './location-details.page';
//import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationDetailsPageRoutingModule,
    /*
    AgmCoreModule.forRoot({
      apiKey: 'Your key'
    })
    */
  ],
  declarations: [LocationDetailsPage]
})
export class LocationDetailsPageModule {}
