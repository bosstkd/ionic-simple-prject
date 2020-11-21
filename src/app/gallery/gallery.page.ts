import { Component, OnInit } from '@angular/core';
import { CatalogueServiceService } from '../services/catalogue-service.service';
import { GalleryModel } from './models/gallery-model';
import { GalleryService } from './services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor(private galleryService : GalleryService, private cs : CatalogueServiceService) { }

  keyword:string='Lyon'
  ngOnInit() {
  }

  galleryModel : GalleryModel= new GalleryModel();
  nbrParPage:number=10;
  defaultPage:number=1;
  totalPages:number;

  goToSearch(){
    this.galleryModel.hits = [];
    this.defaultPage=1;
    this.onLoadImages();
  }

  onLoadImages(){
    this.galleryService.onLoadImages(this.keyword, this.nbrParPage, this.defaultPage).subscribe(data=>{
      let imgs = data as GalleryModel;

      for(let img of imgs.hits){
         this.galleryModel.hits.push(img);
      }
     
      this.totalPages = imgs.totalHits/this.nbrParPage;

    }, err=>{
      console.error(err);
      this.cs.openSnackBar('Error', err.message);
    });
  }

  loadData(event){
    if(this.totalPages > this.defaultPage){
      this.defaultPage++;
      this.onLoadImages();
      event.target.complete();
    }else{
      event.target.disabled = true;
    }
  }

}
