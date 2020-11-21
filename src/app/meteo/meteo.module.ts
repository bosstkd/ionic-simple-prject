import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MeteoPageRoutingModule } from './meteo-routing.module';
import { MeteoPage } from './meteo.page';
import { AngMatModule } from '../ang-mat/ang-mat.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeteoPageRoutingModule,
    AngMatModule
  ],
  declarations: [MeteoPage]
})
export class MeteoPageModule {}
