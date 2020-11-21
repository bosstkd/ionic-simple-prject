import { Component, OnInit } from '@angular/core';
import { Place } from '../locations/models/place';
import { LocationService } from '../locations/services/location.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {

  constructor(private locationService:LocationService) { }

  location:Place;

  ngOnInit() {
    this.location = this.locationService.currentLocation;
  }

}
