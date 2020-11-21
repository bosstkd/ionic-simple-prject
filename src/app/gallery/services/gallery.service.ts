import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpClient:HttpClient) { }

  onLoadImages(keyword:string, per_page?:number, page?:number){
    let url:string='https://pixabay.com/api/?key=13927235-2556e114ef42cdc69c5449054&q=';
    let options:string= keyword;
    if(per_page>0 && page>0){
      options = keyword+'&per_page='+per_page+'&page='+page;
    }
        
    return this.httpClient.get(url+options);
  }
}
