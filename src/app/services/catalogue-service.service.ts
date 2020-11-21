import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CatalogueServiceService {

  constructor(private httpClient:HttpClient, private _snackBar: MatSnackBar) { }

  public host:string="http://10.189.49.54:8080/";
  download(url:string, type:string){
    const httpOptions = {
      'responseType' : 'blob' as 'json',
      'headers' : new HttpHeaders('filename'),
      'observe' : 'response' as 'body'
    }
   return this.httpClient.get<any>(this.host+"/download?url="+url+"&type="+type, httpOptions);
  }

  isYoutubeUrl(url:string):boolean{
    const regexExp = new RegExp(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi);
   return regexExp.test(url);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
