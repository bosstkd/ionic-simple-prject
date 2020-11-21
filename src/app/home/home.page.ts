import { Component } from '@angular/core';
import { CatalogueServiceService } from '../services/catalogue-service.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contact={
    name:"Amine Mahmoudi",
    email:"a-ek@hotmail.fr",
    tel:"+33 626 13 70 69",
    logo:"assets/images/logo_mhd.png"
  }

  urlDown:string;
  type:string='audio';
  constructor( private cs:CatalogueServiceService) {}

  search(){
    console.log(this.urlDown+" : "+this.type);
    
    if(this.cs.isYoutubeUrl(this.urlDown)){
      this.cs.download(this.urlDown, this.type).subscribe(data=>{
        let file = new Blob([data.body], { type: data.type });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(file);
        console.log(data.headers.get('filename'));
        link.download = data.headers.get('filename');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, err=>{
        console.error(err);
      });
    }else{
      console.error("Erreur de chargement")
    }
  }
}
