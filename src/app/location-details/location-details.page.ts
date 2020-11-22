import { Component, OnInit } from '@angular/core';
import { Place } from '../locations/models/place';
import { LocationService } from '../locations/services/location.service';
import { CatalogueServiceService } from '../services/catalogue-service.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {

  constructor(private locationService:LocationService, 
              private cs:CatalogueServiceService, 
              private camera:Camera,
              private alertCtrl:AlertController,
              private _sanitizer: DomSanitizer) { }

  location:Place;

  ngOnInit() {
    this.location = this.locationService.currentLocation;
  }

  async onTakePicture(){
    const options1: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      // récupérer à partir de la caméra
      sourceType:this.camera.PictureSourceType.CAMERA,
      allowEdit:true,
     // targetWidth:320,
     // targetHeight:240
    };
  
    const options2: CameraOptions = {
      quality: 50,
      // pour la sauvegarder sous forme de text
      destinationType: this.camera.DestinationType.DATA_URL,
      // pour la sauvegarder sous dans la bibléotheque de photo -> getPath
      // destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      // récupérer à partir de la bibléotheque de photo
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit:true,
    };

    let alert = await this.alertCtrl.create({
      header:'Confirmation',
      message: 'Source ?',
      buttons: [
        {
          text: 'Caméra',
          handler: () => {
            this.onTakePhoto(options1);
          }
        },
        {
          text: 'Bibléotheque',
          handler: () => {
            this.onTakePhoto(options2);
          }
        }
      ]
    });
    await alert.present();
  }

  onTakePhoto(options : CameraOptions){

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     // this.location.photos.push(base64Image);
      this.locationService.addImage(base64Image, this.location.timestamp)
    }, (err) => {
      // Handle error
    });
  }

  imagePath(img){
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
    + img);
  }

}
